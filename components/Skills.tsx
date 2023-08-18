import { Chart } from "https://deno.land/x/fresh_charts/mod.ts";

export default function Skills() {
  return (
    <div>
      <h2 class="text(2xl md:left) my-8">Skills</h2>
      <div class="w-full max-w-4xl">
        <Chart
          type="bar"
          options={{
            maintainAspectRatio: false,
            responsive: true,

            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  font: {
                    family: "Poppins", // Your font family
                    size: 14,
                  },
                },
              },
              y: {
                display: false,
                lineWidth: 0,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            border: {
              display: false,
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={{
            labels: ["PHP", "Node", "Deno", "Vue", "React", "MySQL", "MongoDB"],
            datasets: [{
              label: "",
              data: [100, 80, 50, 70, 40, 90, 60],
              backgroundColor: [
                "rgb(52, 211, 153)",
                "rgb(52, 211, 153)",
                "rgb(52, 211, 153)",
                "rgb(248, 113, 113)",
                "rgb(248, 113, 113)",
                "rgb(59, 130, 246)",
                "rgb(59, 130, 246)",
              ],
            }],
          }}
          svgClass="w-full h-full"
        />
      </div>
    </div>
  );
}
