import { csvParse } from 'd3-dsv';
import pulitzerCsv from './pulitzer-circulation-data.csv?raw';


const parsed = csvParse(pulitzerCsv)

export function preparePulitzerData(year: '2003' | '2013') {
  const xColumn = year === '2003' ? 'Daily Circulation, 2004' : 'Daily Circulation, 2013'
  const yColumn = year === '2003' ? 'Pulitzer Prize Winners and Finalists, 1990-2003' : 'Pulitzer Prize Winners and Finalists, 2004-2014'

  const data = parsed.map(d => ({
    x: Number(d[xColumn]?.replaceAll(',', '')),
    y: Number(d[yColumn]),
    label: d["Newspaper"],
  }))
  return data
  
}