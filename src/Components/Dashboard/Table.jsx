import React from 'react'
import { homedatatable } from '../../Data/index'

const Table = () => {
    const [state, setstate] = React.useState(homedatatable);
    const [dir, setdir] = React.useState('asc')
    const [start, setstart] = React.useState(0)
    const [interval, _setinterval] = React.useState(10)
    const [sortKey, setSortKey] = React.useState(null)

    const sortdata = (key) => {
        setSortKey(key)
        if (dir === 'asc') {
            setdir('desc')
            const sorteddata = [...state].sort((a, b) => {
                if (a[key] > b[key]) return 1
                if (a[key] < b[key]) return -1
                return 0;
            })
            setstate(sorteddata)
        } else {
            setdir('asc')
            const sorteddata = [...state].sort((a, b) => {
                if (a[key] < b[key]) return 1
                if (a[key] > b[key]) return -1
                return 0;
            })
            setstate(sorteddata)
        }
    }

    const SortIcon = ({ col }) => (
        <span className="ml-1 inline-block opacity-50 text-xs">
            {sortKey === col ? (dir === 'asc' ? '▲' : '▼') : '⇅'}
        </span>
    )

    const columns = [
        { label: 'Sr.', key: 'name1' },
        { label: 'Item ID', key: 'name2' },
        { label: 'Item Name', key: 'name3' },
        { label: 'Date', key: 'name4' },
        { label: 'Price', key: 'name5' },
        { label: 'Category', key: 'name6' },
        { label: 'Qty.', key: 'name7' },
        { label: 'Supplier', key: 'name8' },
        { label: 'Status', key: 'name9' },
    ]

    const totalPages = Math.ceil(state.length / interval)
    const currentPage = Math.floor(start / interval)

    return (
        <>
            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mt-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-gray-800">Recently Added</h2>
                        <p className="text-xs text-gray-400 mt-0.5">{state.length} items total</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 bg-blue-50 px-3 py-1.5 rounded-full w-fit">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block"></span>
                        Live data
                    </div>
                </div>

                {/* Table Wrapper */}
                <div className="w-full overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm text-left min-w-[640px]">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-400 text-white">
                                {columns.map((col) => (
                                    <th
                                        key={col.key}
                                        onClick={() => sortdata(col.key)}
                                        className="px-4 py-3 font-semibold whitespace-nowrap cursor-pointer hover:bg-blue-600 transition-colors select-none first:rounded-tl-xl last:rounded-tr-xl"
                                    >
                                        {col.label}
                                        <SortIcon col={col.key} />
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {state.slice(start, start + interval).map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-50 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                                >
                                    <td className="px-4 py-3 text-gray-500 font-medium">{start + index + 1}</td>
                                    <td className="px-4 py-3 text-gray-700 font-mono text-xs">{item.name2}</td>
                                    <td className="px-4 py-3 text-gray-800 font-medium whitespace-nowrap">{item.name3}</td>
                                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{item.name4}</td>
                                    <td className="px-4 py-3 text-gray-800 font-semibold whitespace-nowrap">{item.name5}</td>
                                    <td className="px-4 py-3">
                                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                                            {item.name6}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-700 text-center">{item.name7}</td>
                                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{item.name8}</td>
                                    <td className="px-4 py-3">
                                        {item.name9?.[0] === 'I' && (
                                            <span className="bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap">
                                                {item.name9}
                                            </span>
                                        )}
                                        {item.name9?.[0] === 'O' && (
                                            <span className="bg-red-100 text-red-600 px-3 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap">
                                                {item.name9}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                        Showing {start + 1}–{Math.min(start + interval, state.length)} of {state.length} entries
                    </p>
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={() => setstart(Math.max(0, start - interval))}
                            disabled={start === 0}
                            className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                            ← Back
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setstart(i * interval)}
                                className={`w-8 h-8 text-xs rounded-lg border transition-all font-medium ${
                                    currentPage === i
                                        ? 'bg-blue-500 text-white border-blue-500 shadow-sm'
                                        : 'border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => { if (start + interval < state.length) setstart(start + interval) }}
                            disabled={start + interval >= state.length}
                            className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
