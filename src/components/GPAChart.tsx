import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Semester } from "../types"
import { calculateCumulativeGPAs } from "../utils/CalculateCumulativeGpa"

interface GPAChartProps {
  semesters: Semester[]
}

export function GPAChart({ semesters }: GPAChartProps) {
  const data = calculateCumulativeGPAs(semesters)

  return (
    <div className="w-full bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white dark:text-white">GPA Progression</h3>
        <p className="text-sm text-white dark:text-white mt-1">Your cumulative GPA trend over semesters</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="currentColor" 
              opacity={0.1} 
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey="semester"
              stroke="white"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              domain={[7, 8]}
              ticks={[7, 7.25, 7.5, 7.75, 8]}
              stroke="white"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toFixed(2)}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-3 shadow-lg rounded-lg">
                      <p className="text-sm font-medium text-white dark:text-white mb-1">{label}</p>
                      <p className="text-2xl font-bold text-white dark:text-white">
                        {Number(payload[0].value).toFixed(2)}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="gpa"
              stroke="#818cf8"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#818cf8",
                strokeWidth: 2,
                stroke: "#4f46e5"
              }}
              activeDot={{
                r: 7,
                fill: "#4f46e5",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
