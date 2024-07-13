"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// CSS
import styles from "./LabelCalendar.module.scss";

interface Props {
    label: string;
    readonly?: boolean;
    handleDate: (date: Date | undefined) => void;
}

function LabelCalendar({ label, readonly, handleDate }: Props) {
    const [date, setDate] = useState<Date | undefined>(new Date());

    useEffect(() => {
        handleDate(date);
    }, [date]);

    return (
        <div className={styles.container}>
            <span className={styles.container__label}>{label}</span>
            {/* Shadcn UI - Calendar */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"outline"} className={cn("w-[200px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                {!readonly && (
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                )}
            </Popover>
        </div>
    );
}

export default LabelCalendar;