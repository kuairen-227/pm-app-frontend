import {
  Empty as EmptyBase,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "../ui/empty";

type EmptyProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export function Empty({
  title = "データがありません",
  description,
  action,
}: EmptyProps) {
  return (
    <EmptyBase>
      <EmptyHeader>
        {/* タイトル */}
        <EmptyTitle>{title}</EmptyTitle>
        {/* 説明 */}
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>

      <EmptyContent>
        {/* アクション */}
        {action}
      </EmptyContent>
    </EmptyBase>
  );
}
