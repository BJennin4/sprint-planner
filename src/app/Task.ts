export interface Task {
    itemName: string;
    itemNum: number;
    itemNotes: string;
    itemStatus: "new"         |
            "todo"        |
            "in progress" |
            "for review"  |
            "done"        ;
    associatedTeam: 
      "UXD"               |
      "Software Engineers"|
      "Writers"           ;
    associatedSprint?: string;
    assignedUser?: string;
};
