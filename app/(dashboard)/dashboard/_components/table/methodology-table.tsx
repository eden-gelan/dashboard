"use client"

import * as React from "react"
import { type Methodology } from "@/types/db"
import type { DataTableFilterField } from "@/types/data-table"

import { useDataTable } from "@/hooks/use-data-table"
import { DataTable } from "@/components/data-table/data-table"
import { getColumns } from "./methodology-table-columns"



export function PatientTable() {
  const data: Methodology[] = [
    {
      id: "1",
      code: "OWa713",
      name: "OWASP Top 10 Methodology",
      desciption: "equest all service banners (flags) for discovered TCP ports",
      type: "Testcase",
      status: "Public"
    },
    {
      id: "1",
      code: "OWa713",
      name: "OWASP Top 10 Methodology",
      desciption: "equest all service banners (flags) for discovered TCP ports",
      type: "Testcase",
      status: "Public"
    },
    {
      id: "1",
      code: "OWa713",
      name: "OWASP Top 10 Methodology",
      desciption: "equest all service banners (flags) for discovered TCP ports",
      type: "Testcase",
      status: "Public"
    },
    {
      id: "1",
      code: "OWa713",
      name: "OWASP Top 10 Methodology",
      desciption: "equest all service banners (flags) for discovered TCP ports",
      type: "Testcase",
      status: "Public"
    },
    {
      id: "1",
      code: "OWa713",
      name: "OWASP Top 10 Methodology",
      desciption: "equest all service banners (flags) for discovered TCP ports",
      type: "Testcase",
      status: "Public"
    },
    {
      id: "1",
      code: "OWa713",
      name: "OWASP Top 10 Methodology",
      desciption: "equest all service banners (flags) for discovered TCP ports",
      type: "Testcase",
      status: "Public"
    },


  ]
  const pageCount = 5
  const columns = React.useMemo(() => getColumns(), [])
  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields: [],
    enableAdvancedFilter: false,
    defaultPerPage: 6,
    defaultSort: "name.desc",
  })

  return (
    <div className="w-full space-y-2.5 overflow-auto">
      <DataTable
        table={table}
      />
    </div>
  )
}
