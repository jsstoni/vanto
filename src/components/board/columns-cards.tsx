"use client";

import { useMemo } from "react";
import { ItemsCards } from "@/components";
import { Columns, Tasks } from "@/utils/constant/tasks";
import { useDnD } from "@/utils/hooks";
import { cn } from "@/utils/libs/cn";

interface Props {
  column: Columns;
  loading: boolean;
  tasks: Tasks[];
}

export function ColumnsCards({ column, loading, tasks }: Props) {
  const { onDragOver, onDrop, onDragEnd, whereMove } = useDnD();
  //tasks by columns
  const tasksByColumns = useMemo(
    () => tasks.filter((task) => task.column === column),
    [tasks, column],
  );
  //column variant
  const cv = {
    Backlog: "border-l-4 border-zinc-400 px-4",
    "In Progress": "border-l-4 border-yellow-400 px-4",
    Test: "border-l-4 border-blue-400 px-4",
    Done: "border-l-4 border-green-400 px-4",
  };

  return (
    <section
      className="relative columns-card flex flex-1 select-none flex-col gap-4 p-4"
      onDragOver={(ev) => onDragOver(ev, column)}
      onDrop={onDrop}
      onDragEnd={(ev) => onDragEnd(ev)}
    >
      <p className={cn("flex items-center", cv[column])}>
        {column}{" "}
        <small className="ml-3 rounded-md bg-zinc-200 px-2 dark:bg-zinc-900">
          {tasksByColumns.length}
        </small>
      </p>

      {loading && <span>loading...</span>}

      {!loading &&
        tasksByColumns.map((task) => <ItemsCards key={task.id} task={task} />)}

      {whereMove === column && <div className="h-0.5 bg-red-500"></div>}
    </section>
  );
}
