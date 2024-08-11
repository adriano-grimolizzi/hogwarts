import {
  type Row,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useState } from "react"

import CustomTable from "./Table"
import type { Wizard } from "../../openapi"
import { t } from "i18next"

const WizardTable = ({ wizards }: { wizards: Array<Wizard> }) => {
  const [rowSelection, setRowSelection] = useState({})

  const wizardColumns: Array<keyof Wizard> = ["firstName", "lastName"]

  const columnHelper = createColumnHelper<Wizard>()

  const checkboxColumn = columnHelper.display({
    id: "select",
    cell: ({ row }: { row: Row<Wizard> }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  })

  const toColumns = (label: keyof Wizard) =>
    columnHelper.accessor(label, {
      id: label,
      header: t(label),
      cell: (info) => info.getValue(),
    })

  const table = useReactTable({
    data: wizards,
    columns: [checkboxColumn, ...wizardColumns.map(toColumns)],
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  })

  return (
    <>
      <CustomTable table={table} />
      <pre>{JSON.stringify(table.getState().rowSelection, null, 2)}</pre>
    </>
  )
}

export default WizardTable
