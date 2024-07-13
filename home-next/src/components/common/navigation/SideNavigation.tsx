// CSS
import styles from "./SideNavigation.module.scss";

// Shadcn UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dot, Search } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

function SideNavigation() {
   return (
        <div className={styles.container}>
            {/* 검색창 */}
            <div className={styles.container__searchBox}>
                <Input type="text" placeholder="검색어를 입력해주세요." className="focus-visible:ring-0" />
                <Button variant={"outline"} size="icon">
                    <Search className="w-4 h-4" />
                </Button>
            </div>
            <div className={styles.container__buttonBox}>
                <Button variant={"outline"} className="w-full text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500">
                    Add New Page
                </Button>
            </div>
            <div className={styles.container__todos}>
                <span className={styles.container__todos__label}>Your To do</span>                
                <div className={styles.container__todos__list}>
                  {/* Is Supabase Todos 
                    {todos &&
                        todos.map((item: any) => {
                            return (
                                <div className="flex items-center py-2 bg-[#f5f5f4] rounded-sm cursor-pointer" key={item.id}>
                                    <Dot className="mr-1 text-green-400" />
                                    <span className="text-sm">{item.title === "" ? "제목 없음" : item.title}</span>
                                </div>
                            );
                        })}
                            */}
                </div>
            </div>
        </div>
    );
}

export default SideNavigation;