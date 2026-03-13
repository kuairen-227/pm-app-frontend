import { DEFAULT_API_VERSION } from "@/shared/config/api";
import { env } from "@/shared/config/env";
import type { ApiVersion } from "@/shared/types/api";

/**
 * APIのベースURLを取得
 * @param version APIバージョン（省略時はDEFAULT_API_VERSIONを設定）
 */
export function getDefaultBaseUrl(version: ApiVersion = DEFAULT_API_VERSION) {
  return `${env.NEXT_PUBLIC_API_BASE_URL}/api/v${version}`;
}
