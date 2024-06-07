export interface ActivityMeta {
    label: string;
    fillColor: string;
}

export interface ActivityItem {
    name: string;
    value: string;
}

export interface DayWiseActivityItem {
    count: string;
    label: string;
    fillColor: string;
}

export interface DayWiseActivity {
    date: string;
    items: {
        children: DayWiseActivityItem[];
    };
}

export interface DeveloperActivity {
    name: string;
    totalActivity: ActivityItem[];
    dayWiseActivity: DayWiseActivity[];
}

export interface Data {
    AuthorWorklog: {
        activityMeta: ActivityMeta[];
        rows: DeveloperActivity[];
    };
}
