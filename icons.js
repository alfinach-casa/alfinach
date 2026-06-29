// Iconos propios en SVG, sin dependencias externas — sustituyen a lucide-react
// Misma firma que los componentes de lucide-react: <Icon size={number} color={string} style={...} />

function makeIcon(paths, viewBox = '0 0 24 24') {
  return function Icon({ size = 24, color = 'currentColor', style, strokeWidth = 2, ...rest }) {
    return React.createElement(
      'svg',
      {
        width: size, height: size, viewBox,
        fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
        style, ...rest,
      },
      paths.map((p, i) => React.createElement('path', { key: i, d: p.d, fill: p.fill || 'none' }))
    );
  };
}

const Calendar = makeIcon([
  { d: 'M3 10h18' }, { d: 'M8 2v4' }, { d: 'M16 2v4' },
  { d: 'M4 4h16a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z' },
]);

const ChevronLeft = makeIcon([{ d: 'M15 18l-6-6 6-6' }]);
const ChevronRight = makeIcon([{ d: 'M9 18l6-6-6-6' }]);
const Plus = makeIcon([{ d: 'M12 5v14' }, { d: 'M5 12h14' }]);
const Check = makeIcon([{ d: 'M20 6 9 17l-5-5' }]);
const X = makeIcon([{ d: 'M18 6 6 18' }, { d: 'M6 6l12 12' }]);

const Lock = makeIcon([
  { d: 'M5 11h14v9H5z' },
  { d: 'M8 11V7a4 4 0 0 1 8 0v4' },
]);

const Edit2 = makeIcon([{ d: 'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' }]);

const Mail = makeIcon([
  { d: 'M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z' },
  { d: 'M3 6l9 7 9-7' },
]);

const User = makeIcon([
  { d: 'M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z' },
  { d: 'M4 21c0-4 3.5-7 8-7s8 3 8 7' },
]);

const LogOut = makeIcon([
  { d: 'M9 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4' },
  { d: 'M16 17l5-5-5-5' },
  { d: 'M21 12H9' },
]);

const Clock = makeIcon([
  { d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z' },
  { d: 'M12 7v5l3 3' },
]);

const AlertCircle = makeIcon([
  { d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z' },
  { d: 'M12 8v5' },
  { d: 'M12 16.2v.1' },
]);

const Home = makeIcon([
  { d: 'M3 11.5 12 4l9 7.5' },
  { d: 'M5 10v10h14V10' },
  { d: 'M9 20v-6h6v6' },
]);

const Shield = makeIcon([
  { d: 'M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z' },
]);

const CalendarDays = makeIcon([
  { d: 'M3 10h18' }, { d: 'M8 2v4' }, { d: 'M16 2v4' },
  { d: 'M4 4h16a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z' },
  { d: 'M8 14h.01' }, { d: 'M12 14h.01' }, { d: 'M16 14h.01' },
]);

const CalendarRange = makeIcon([
  { d: 'M3 10h18' }, { d: 'M8 2v4' }, { d: 'M16 2v4' },
  { d: 'M4 4h16a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z' },
  { d: 'M8 14h2' }, { d: 'M14 14h2' },
]);

const List = makeIcon([
  { d: 'M8 6h13' }, { d: 'M8 12h13' }, { d: 'M8 18h13' },
  { d: 'M3 6h.01' }, { d: 'M3 12h.01' }, { d: 'M3 18h.01' },
]);

const Info = makeIcon([
  { d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z' },
  { d: 'M12 16v-5' }, { d: 'M12 8v.1' },
]);

const BellRing = makeIcon([
  { d: 'M6 8a6 6 0 0 1 12 0c0 3 1 4.5 2 6H4c1-1.5 2-3 2-6Z' },
  { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0' },
  { d: 'M4 4 2 6' }, { d: 'M20 4l2 2' },
]);
