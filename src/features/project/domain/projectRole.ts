export const ProjectRole = {
  ProjectManager: "ProjectManager",
  Member: "Member",
};

export type ProjectRole = (typeof ProjectRole)[keyof typeof ProjectRole];
