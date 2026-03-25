# 📡 API 設計書

## 1. アーキテクチャ概要

PM App は BFF（Backend For Frontend）構成を採用する。

### Server Component

```text
Server Component
    ↓
UseCase
    ↓
Infrastructure(API DTO)
    ↓
apiClient
    ↓
ASP.NET Core API
    ↓
DTO
    ↓
Domain
    ↓
ViewModel
    ↓
Component
```

### Client Component

```text
Client Component
    ↓
Hook (React Query)
    ↓
Route Handler (BFF)
    ↓
UseCase
    ↓
Infrastructure(API DTO)
    ↓
apiClient
    ↓
ASP.NET Core API
    ↓
DTO
    ↓
Domain
    ↓
JSON Response
    ↓
React Query Cache
    ↓
Component
```

## 2. レイヤー構造

| レイヤー | 役割 |
|-------|------|
| presentation | React Component / Hooks |
| usecases | 業務ロジック |
| domain | ドメインモデル |
| infrastructure | API通信 |
| mapper | DTO ⇄ Domain ⇄ View 変換 |

イメージ：

```text
presentation → usecases → domain
                      ↓
               infrastructure
```

## 3. データモデル

| モデル | 用途 |
|-------|------|
| DTO | API通信 |
| Domain | アプリ内部 |
| View | UI表示 |
| Form | 入力フォーム |

データ変換フロー：

DTO → Domain → View

---

## 4. UseCase 命名ルール

### Query（取得）

- getProject
- listProjects
- getProjectMembers
- getCurrentUser

### Mutation（更新）

- createProject
- updateProject
- deleteProject
- archiveProject
- restoreProject
- addProjectMember
- removeProjectMember

※ HTTPメソッドではなく業務操作で命名する

## 5. Infrastructure(API) 命名ルール

API通信関数は DTO を扱うことがわかる命名とする。

- getProjectDto
- listProjectsDto
- createProjectDto
- updateProjectDto
- deleteProjectDto

## 6. Route Handler（BFF）

Route Handler の役割：

- Browser からの API
- Cookie 認証
- UseCase 呼び出し
- JSON レスポンス返却

Route Handler は UseCase を呼び出すだけとする。

例：

```ts
export async function GET(req, { params }) {
  const project = await getProject(params.projectId);
  return Response.json(project);
}
````

## 7. React Query Hooks

Hooks の役割：

* データ取得
* キャッシュ
* loading / error
* mutation
* invalidate

例：

```ts
export function useProject(projectId: string) {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await fetch(`/api/projects/${projectId}`);
      return res.json();
    },
  });
}
```
