"use client";

import { useState } from "react";
// Shadcn UI
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
// CSS
import styles from "./BasicBoard.module.scss";
import LabelCalendar from "../calendar/LabelCalendar";
import MarkdownDialog from "../dialog/MarkdownDialog";

function BasicBoard() {
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <div className={styles.container__header__titleBox}>
                    <Checkbox className="w-5 h-5" />
                    {/* <span className={styles.title}>Please enter a title for the board.</span> */}
                    <span className={styles.title}>It is filled in after the post is created.</span>
                </div>
                <Button variant={"ghost"}>                    
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                </Button>
            </div>
            <div className={styles.container__body}>
                <div className={styles.container__body__calendarBox}>
                    <LabelCalendar label="From" handleDate={setStartDate} />
                    <LabelCalendar label="To" handleDate={setEndDate} />
                </div>
                <div className={styles.container__body__buttonBox}>
                    <Button variant={"ghost"} className="font-normal text-gray-400 hover:bg-green-50 hover:text-green-500">
                        Duplicate
                    </Button>
                    <Button variant={"ghost"} className="font-normal text-gray-400 hover:bg-red-50 hover:text-red-500">
                        Delete
                    </Button>
                </div>
            </div>
            <div className={styles.container__footer}>
                {/* */}<MarkdownDialog /> 
            </div>
        </div>
    );
}

export default BasicBoard;