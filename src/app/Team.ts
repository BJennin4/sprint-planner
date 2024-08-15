export interface Member {
    userName: string;
    userNumber: number;
    userRole: string;
};
export interface Sprint {
    sprintNumber: number;
    sprintRange: string;
    sprintNotes: string;
};

export interface Team {
    members: Array <Member>;
    sprints: Array <Sprint>;
};
