export type Project = {
  id: string;
  name: string;
  description?: string | null;
  members?: ProjectMember[];
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
};

type ProjectMember = {
  userId: string;
  projectRole: string;
};
