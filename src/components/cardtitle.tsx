import React from "react";

export default function CardTitle(props: any) {
    return (
        <div>
            <div
                className={"flex items-center py-1 px-2 border-b border-b-1 text-lg border-gray-300 dark:border-gray-600 font-semibold"}>

                {props.children}
            </div>
        </div>
    )

}