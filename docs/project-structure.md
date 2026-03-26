# 📁 プロジェクト構造

## 全体構造

```bash
src/
  app/
    api/
    (authenticated)/
    (public)/

  features/
    project/
    auth/
    task/

  shared/
    api/
    lib/
    config/
    utils/
```

## features 配下構造（DDD / Clean Architecture）

```bash
features/{feature-xxx}
  domain/
  application/
  infrastructure/
  presentation/
```

## app/api（Route Handler）

```bash
app/api/projects/
  route.ts
  [projectId]/
    route.ts
```

Route Handler → UseCase を呼び出す

## shared フォルダー

```bash
shared/
  api/
    client.ts        ← apiClient
  config/
  lib/
  utils/
```

## レイヤー責務まとめ

| フォルダー | レイヤー | 役割 |
|---------|--------|------|
| presentation | UI | Component / Hooks |
| usecases | Application | 業務ロジック |
| domain | Domain | Entity |
| infrastructure | Infrastructure | API通信 |
| shared/api | HTTP | apiClient |
| app/api | BFF | Route Handler |

## 呼び出し関係

```
Client Component
  → hooks
  → Route Handler
  → UseCase
  → API DTO
  → apiClient

Server Component
  → UseCase
  → API DTO
  → apiClient
```
