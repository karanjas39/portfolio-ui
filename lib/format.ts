const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatMonth = (ym: string) => {
  const [y, m] = ym.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
};

export const formatRange = (
  start: string,
  end?: string,
  present = "Present"
) => {
  if (end === start) return formatMonth(start);
  return `${formatMonth(start)} – ${end ? formatMonth(end) : present}`;
};

export const formatDay = (ymd: string) => {
  const [y, m, d] = ymd.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
};
