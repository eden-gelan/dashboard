import { DataTableSkeleton } from '@/components/data-table/data-table-skeleton'
import React from 'react'
import { PatientTable } from './_components/table/methodology-table'
import SectionWrapper from '@/components/section-wrapper'
import AnalysisCard from '@/components/analysis-card'
import CreateMethedology from './_components/create-methedology'

const DashBoard = () => {
    return (
        <SectionWrapper className='pt-8'>
            <CreateMethedology />
            <div className='grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-6 '>

                <AnalysisCard title='Methodology' amount={18} desc='2 Urgently need' />
                <AnalysisCard title='Public' amount={12} desc='2 Urgently need' />
                <AnalysisCard title='Private' amount={6} desc='2 Urgently need' />
                <AnalysisCard title='Total test cases' amount={18} desc='2 Urgently need' />
                <AnalysisCard title='Checklist' amount={18} desc='2 Urgently need' />

            </div>
            <React.Suspense
                fallback={
                    <DataTableSkeleton
                        columnCount={5}
                        searchableColumnCount={1}
                        filterableColumnCount={2}
                        cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
                        shrinkZero
                    />
                }
            >
                <PatientTable />
            </React.Suspense>
        </SectionWrapper>
    )
}

export default DashBoard