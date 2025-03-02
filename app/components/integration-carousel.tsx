"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const ICONS = [
  { name: "LinkedIn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
  {
    name: "Google Cloud",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  { name: "Snowflake", src: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  {
    name: "CSV",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBkPSJNMzY5LjkgOTcuOUwyODYgMTRDMjc3IDUgMjY0LjgtLjEgMjUyLjEtLjFINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djQxNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMTMxLjljMC0xMi43LTUuMS0yNS0xNC4xLTM0em0tMjIuNiAyMi43YzIuMSAyLjEgMy41IDQuNiA0LjIgNy40SDI1NlYzMi41YzIuOC43IDUuMyAyLjEgNy40IDQuMmw4My45IDgzLjl6TTMzNiA0ODBINDhjLTguOCAwLTE2LTcuMi0xNi0xNlY0OGMwLTguOCA3LjItMTYgMTYtMTZoMTc2djEwNGMwIDEzLjMgMTAuNyAyNCAyNCAyNGgxMDR2MzA0YzAgOC44LTcuMiAxNi0xNiAxNnptLTQ4LTE0NGMwIDQuNC0zLjYgOC04IDhoLTU2djU2YzAgNC40LTMuNiA4LTggOGgtNDhjLTQuNCAwLTgtMy42LTgtOHYtNTZoLTU2Yy00LjQgMC04LTMuNi04LTh2LTQ4YzAtNC40IDMuNi04IDgtOGg1NnYtNTZjMC00LjQgMy42LTggOC04aDQ4YzQuNCAwIDggMy42IDggOHY1Nmg1NmM0LjQgMCA4IDMuNiA4IDh2NDh6Ii8+PC9zdmc+",
  },
  { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  {
    name: "Analytics",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyLjIgMzg0LjJDNDMyLjEgMzk0LjEgNDE4LjIgNDAwIDQwMy45IDQwMEgxNi4xQzcuMiA0MDAgMCAzOTIuOCAwIDM4My45YzAtNC40IDEuOC04LjYgNC45LTExLjdMMTY0LjkgMjEyLjdDMTc1IDIwMi42IDE3NS4xIDE4NS44IDE2NS4yIDE3NS42TDg4LjQgOTYuOUM4NS42IDk0LjEgODQgOTAuNCA4NCA4Ni41YzAtNy41IDYuMS0xMy41IDEzLjUtMTMuNWgyNzkuOWM2LjUgMCAxMi42IDMuMiAxNi4yIDguN2w3OC45IDExOC4zYzEuMyAxLjkgMS45IDQuMiAxLjkgNi41IDAgNi4zLTUuMSAxMS40LTExLjQgMTEuNEgyNjUuMmMtNi44IDAtMTIuMyA1LjUtMTIuMyAxMi4zIDAgMi45IDEgNS43IDIuOCA3LjlsNzQuOSA5Ny4yYzUuOSA3LjcgNC4yIDE4LjctMy42IDI0LjZ6Ii8+PC9zdmc+",
  },
  {
    name: "Excel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    name: "Charts",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyLjIgMzg0LjJDNDMyLjEgMzk0LjEgNDE4LjIgNDAwIDQwMy45IDQwMEgxNi4xQzcuMiA0MDAgMCAzOTIuOCAwIDM4My45YzAtNC40IDEuOC04LjYgNC45LTExLjdMMTY0LjkgMjEyLjdDMTc1IDIwMi42IDE3NS4xIDE4NS44IDE2NS4yIDE3NS42TDg4LjQgOTYuOUM4NS42IDk0LjEgODQgOTAuNCA4NCA4Ni41YzAtNy41IDYuMS0xMy41IDEzLjUtMTMuNWgyNzkuOWM2LjUgMCAxMi42IDMuMiAxNi4yIDguN2w3OC45IDExOC4zYzEuMyAxLjkgMS45IDQuMiAxLjkgNi41IDAgNi4zLTUuMSAxMS40LTExLjQgMTEuNEgyNjUuMmMtNi44IDAtMTIuMyA1LjUtMTIuMyAxMi4zIDAgMi45IDEgNS43IDIuOCA3LjlsNzQuOSA5Ny4yYzUuOSA3LjcgNC4yIDE4LjctMy42IDI0LjZ6Ii8+PC9zdmc+",
  },
  { name: "Database", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  {
    name: "Query",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAyOC00NFYzODhjMCA2LjQgMi41IDEyLjUgNyAxN2w5OS43IDk5LjdjOS40IDkuNCAyNC42IDkuNCAzMy45IDBsMjguMy0yOC4zYzkuNC05LjQgOS40LTI0LjYuMS0zMy43ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHoiLz48L3N2Zz4=",
  },
]

export function IntegrationCarousel() {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const topRow = topRowRef.current
    const bottomRow = bottomRowRef.current

    if (topRow && bottomRow) {
      const cloneItems = () => {
        const topClones = Array.from(topRow.children).map((child) => child.cloneNode(true))
        const bottomClones = Array.from(bottomRow.children).map((child) => child.cloneNode(true))

        topRow.append(...topClones)
        bottomRow.append(...bottomClones)
      }

      cloneItems()
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto overflow-hidden mb-20">
      <div className="flex gap-4 mb-4 overflow-hidden">
        <div ref={topRowRef} className="flex gap-4 scroll-left">
          {ICONS.map((icon, i) => (
            <div
              key={i}
              className="integration-icon bg-black/30 backdrop-blur-sm p-2 rounded-md flex-shrink-0 w-12 h-12"
            >
              <Image
                src={icon.src || "/placeholder.svg"}
                alt={icon.name}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden">
        <div ref={bottomRowRef} className="flex gap-4 scroll-right">
          {ICONS.map((icon, i) => (
            <div
              key={i}
              className="integration-icon bg-black/30 backdrop-blur-sm p-2 rounded-md flex-shrink-0 w-12 h-12"
            >
              <Image
                src={icon.src || "/placeholder.svg"}
                alt={icon.name}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

