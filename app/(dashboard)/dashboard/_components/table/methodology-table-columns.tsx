"use client"

import * as React from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { type ColumnDef } from "@tanstack/react-table"

import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { useRouter } from "next/navigation"
import { Methodology } from "@/types/db"


export function getColumns(): ColumnDef<Methodology>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="-translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="-translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "code",
      cell: ({ row }) => <div className="w-20 text-sm">{row.getValue("code")}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      cell: ({ row }) => {
        return (
          <div className="flex w-[13.25rem] items-center">
            <span className="capitalize test-sm">{row?.original?.name}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "description",
      cell: ({ row }) => {
        return (
          <div className="flex items-center w-[18.25rem] truncate ">
            <span className="capitalize">{row?.original?.desciption}</span>
          </div>
        )
      },
    },
    {
      accessorKey: "type",
      cell: ({ row }) => {
        return (
          <div className="flex items-center">
            <span className="capitalize text-sm">{row?.original?.type}</span>
          </div>
        )
      },
    }, {
      accessorKey: "status",
      cell: ({ row }) => {
        return (
          <div className="flex items-center">
            <span className="capitalize text-sm">{row?.original?.status}</span>
          </div>
        )
      },
    },
    {
      id: "actions",
      cell: function Cell({ row }) {

        return (
          <>
            <button
              aria-label="Open menu"
              className="b bg-transparent border border-primary rounded-full px-6 py-[3px]"
            >
              View
            </button>
          </>
        )
      },
    },
  ]
}
