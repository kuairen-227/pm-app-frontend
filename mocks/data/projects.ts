import type { ListProjectsResponse } from "@/features/project/types/dto";
import { admin } from "./user";

export const mockProjects: ListProjectsResponse = [
  {
    id: "3c4b3f41-ec9a-4c63-a7a7-7b89a7e1c001",
    name: "PM App 開発",
    description: "PM App の開発",
    createdBy: admin.id,
    createdAt: "2025-11-02T09:15:00Z",
    updatedBy: admin.id,
    updatedAt: "2026-02-18T10:20:00Z",
  },
  {
    id: "9a9b1f3d-5b9b-42e2-9a43-1e2e8c7f2002",
    name: "顧客ポータル改善",
    description: "顧客向けポータルサイトのUX改善と機能追加",
    createdBy: admin.id,
    createdAt: "2025-09-10T04:30:00Z",
    updatedBy: admin.id,
    updatedAt: "2026-01-12T06:45:00Z",
  },
  {
    id: "7d1c2e44-0f1e-4c7a-9c87-91f2c6a11003",
    name: "社内業務自動化",
    description: "経理・総務の定型業務を自動化する社内ツール開発",
    createdBy: admin.id,
    createdAt: "2025-07-01T01:10:00Z",
    updatedBy: admin.id,
    updatedAt: "2025-12-20T02:00:00Z",
  },
  {
    id: "5f6a3a12-b4c5-4a1e-b1d2-5c1e7f9b4004",
    name: "インフラ監視基盤刷新",
    description: "監視システムをPrometheus + Grafanaに移行",
    createdBy: admin.id,
    createdAt: "2024-12-05T03:00:00Z",
    updatedBy: admin.id,
    updatedAt: "2025-06-30T07:15:00Z",
  },
  {
    id: "8e9b2c7f-44a1-4d3a-9b12-9e2a7f2c5005",
    name: "モバイルアプリ新規開発",
    description: "既存サービスのモバイルアプリ版をReact Nativeで開発",
    createdBy: admin.id,
    createdAt: "2026-01-15T05:30:00Z",
    updatedBy: admin.id,
    updatedAt: "2026-03-01T08:10:00Z",
  },
];
