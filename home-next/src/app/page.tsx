"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
// Shadcn UI
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
// CSS
import styles from "./page.module.scss";

function Home() {
    const router = useRouter();
    const { toast } = useToast();

    // 페이지 생성 및 Supabase 연동
    const onCreate = async () => {
        // Supabase 데이터베이스 row 생성
        const { error, status } = await supabase
            .from("todos")
            .insert([{ title: "", start_date: new Date(), end_date: new Date(), contents: [] }])
            .select();

        if (error) {
            console.log(error);
        }
        if (status === 201) {
            toast({
                title: "생성 완료!",
                description: "새로운 투두리스트가 생성 되었습니다.",
            });
        }

        // 방금 생성한 TO DO LIST의 ID 값으로 URL 파라미터 생성
        let { data } = await supabase.from("todos").select();

        if (data) {
            router.push(`/create/${data[data?.length - 1].id}`);
        } else return;
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__onBoarding}>
                <span className={styles.container__onBoarding__title}>How to Start:</span>
                <div className={styles.container__onBoarding__steps}>
                    <span>1. Create a page</span>
                    <span>2. Add boards to page</span>
                </div>
                {/* 페이지 추가 버튼 */}
                <Button
                    variant={"outline"}
                    className="w-full bg-transparent text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500"
                    onClick={onCreate}
                >
                    Add New Page
                </Button>
            </div>
        </div>
    );
}

export default Home;