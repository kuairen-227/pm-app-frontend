export type ProjectListView = {
  id: string;
  name: string;
  description?: string | null;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
};

export type ProjectDetailView = {
  id: string;
  name: string;
  description?: string | null;
  members?: {
    userId: string;
    projectRole: string;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
  }[];
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
};
