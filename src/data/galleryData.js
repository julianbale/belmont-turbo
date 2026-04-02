// Each image: { src, alt, hiRes? }
// Paths are relative to /images/ in the public folder.
// Note: CarAtShowHiRes.jpg and CavTurboEngineHiRes.jpg live at images/ root, not images/HiRes/

export const galleries = {
  car: {
    title: 'Belmont Turbo',
    images: [
      { src: 'CarAtShow.jpg',              alt: 'Car at Show',          hiRes: 'CarAtShowHiRes.jpg' },
      { src: 'UnderBridge.jpg',            alt: 'Under Bridge',         hiRes: 'HiRes/UnderBridgeHiRes.jpg' },
      { src: 'SideCar.jpg',               alt: 'Side of Car',          hiRes: 'HiRes/SideCarHiRes.jpg' },
      { src: 'FrontCarBonnetUp.jpg',       alt: 'Front with Bonnet Up' },
      { src: 'AllCarSide.jpg',             alt: 'Car Side View' },
      { src: 'DoorsOpen.jpg',              alt: 'Doors Open' },
      { src: 'FrontAngleCar.jpg',          alt: 'Front Angle' },
      { src: 'FrontAngleCarBonnetUp.jpg',  alt: 'Front Angle Bonnet Up' },
      { src: 'FrontCorner.jpg',            alt: 'Front Corner' },
      { src: 'FrontCar.jpg',               alt: 'Front of Car' },
      { src: 'SnettertonMkIII.jpg',        alt: 'Snetterton MkIII',    hiRes: 'HiRes/SnettertonMkIIIFrontHiRes.jpg' },
      { src: 'SnettertonMkIIIFront.jpg',   alt: 'Snetterton MkIII Front', hiRes: 'HiRes/SnettertonMkIIIHiRes.jpg' },
      { src: 'RevsBaby.jpg',               alt: 'Revs Baby',           hiRes: 'HiRes/RevsBabyHiRes.jpg' },
    ],
  },
  ice: {
    title: 'ICE',
    images: [
      { src: 'BootLeft.jpg',   alt: 'Boot Left' },
      { src: 'AllBoot.jpg',    alt: 'Full Boot' },
      { src: 'HeadUnit.jpg',   alt: 'Head Unit' },
      { src: 'PowerLead.jpg',  alt: 'Power Lead' },
      { src: 'Amps.jpg',       alt: 'Amplifiers' },
      { src: 'DoorBuild.jpg',  alt: 'Door Build' },
    ],
  },
  engine: {
    title: 'Engine',
    images: [
      { src: 'Engine.jpg',             alt: 'Engine',              hiRes: 'HiRes/EngineHiRes.jpg' },
      { src: 'ChargeCooler.jpg',       alt: 'Charge Cooler' },
      { src: 'EngineDistance.jpg',     alt: 'Engine Distance' },
      { src: 'NewEngine.jpg',          alt: 'New Engine' },
      { src: 'NewEngineStripped.jpg',  alt: 'New Engine Stripped' },
      { src: 'OldEngine.jpg',          alt: 'Old Engine' },
      { src: 'CavTurboEngine.jpg',     alt: 'Cav Turbo Engine',    hiRes: 'CavTurboEngineHiRes.jpg' },
    ],
  },
  styling: {
    title: 'Styling',
    images: [
      { src: 'Dash.jpg',             alt: 'Dashboard' },
      { src: 'HeadUnit.jpg',         alt: 'Head Unit' },
      { src: 'Pedals.jpg',           alt: 'Pedals' },
      { src: 'Mirror.jpg',           alt: 'Mirror' },
      { src: 'Lights.jpg',           alt: 'Lights' },
      { src: 'Wheel.jpg',            alt: 'Wheel' },
      { src: 'FogLight.jpg',         alt: 'Fog Light' },
      { src: 'Turbo.jpg',            alt: 'Turbo' },
      { src: 'BackSeat.jpg',         alt: 'Back Seat' },
      { src: 'FrontSeat.jpg',        alt: 'Front Seat' },
      { src: 'InsideCarLeather.jpg', alt: 'Interior Leather',  hiRes: 'HiRes/InsideCarLeatherHiRes.jpg' },
    ],
  },
  rebuild: {
    title: 'How It Was Built',
    images: [
      { src: 'GarageRamps.jpg',   alt: 'Garage Ramps' },
      { src: 'NoDash.jpg',        alt: 'No Dash',      hiRes: 'HiRes/NoDashHiRes.jpg' },
      { src: 'NoEngine.jpg',      alt: 'No Engine' },
      { src: 'NoEngineABS.jpg',   alt: 'No Engine ABS' },
      { src: 'NoSeats.jpg',       alt: 'No Seats' },
      { src: 'Steven.jpg',        alt: 'Steven' },
      { src: 'Working.jpg',       alt: 'Working' },
      { src: 'WorkingHard.jpg',   alt: 'Working Hard' },
      { src: 'NoBumper.jpg',      alt: 'No Bumper' },
      { src: 'NoEngineDark.jpg',  alt: 'No Engine (Dark)' },
    ],
  },
  events: {
    title: 'Events',
    images: [
      { src: 'Snetterton.jpg',               alt: 'Snetterton',             hiRes: 'HiRes/SnettertonHiRes.jpg' },
      { src: 'TrackDay.jpg',                 alt: 'Track Day',              hiRes: 'HiRes/TrackDayHiRes.jpg' },
      { src: 'StartLine.jpg',                alt: 'Start Line' },
      { src: 'QtrMile.jpg',                  alt: 'Quarter Mile',           hiRes: 'HiRes/QtrMileHiRes.jpg' },
      { src: 'FinishLine.jpg',               alt: 'Finish Line' },
      { src: 'SnettertonRacing.jpg',         alt: 'Snetterton Racing',      hiRes: 'HiRes/SnettertonRacingHiRes.jpg' },
      { src: 'SnettertonStartFinishLine.jpg',alt: 'Snetterton Start/Finish', hiRes: 'HiRes/SnettertonStartFinishLineHiRes.jpg' },
      { src: 'SnettertonBend.jpg',           alt: 'Snetterton Bend',        hiRes: 'HiRes/SnettertonBendHiRes.jpg' },
      { src: 'SnettertonDisplay.jpg',        alt: 'Snetterton Display',     hiRes: 'HiRes/SnettertonDisplayHiRes.jpg' },
    ],
  },
  carhistory: {
    title: 'Previous Cars',
    images: [
      { src: 'H470FMJCarChange.jpg',   alt: 'H470FMJ Car Change' },
      { src: 'H470FMJSide.jpg',        alt: 'H470FMJ Side' },
      { src: 'L944ABCFrontDamage.jpg', alt: 'L944ABC Front Damage' },
      { src: 'L944ABCFrontEnd.jpg',    alt: 'L944ABC Front End',   hiRes: 'HiRes/L944ABCFrontEndHiRes.jpg' },
      { src: 'L944ABCFrontSide.jpg',   alt: 'L944ABC Front Side',  hiRes: 'HiRes/L944ABCFrontSideHiRes.jpg' },
      { src: 'L944ABCSideDamage.jpg',  alt: 'L944ABC Side Damage' },
      { src: 'P337PJUCarChange.jpg',   alt: 'P337PJU Car Change' },
    ],
  },
  motorbikes: {
    title: 'Motorbikes',
    images: [
      { src: 'FS1EIanLane.jpg',   alt: 'FS1E Ian Lane',   hiRes: 'HiRes/FS1EIanLaneHiRes.jpg' },
      { src: 'FS1EDadLane.jpg',   alt: 'FS1E Dad Lane',   hiRes: 'HiRes/FS1EDadLaneHiRes.jpg' },
      { src: 'MB50.jpg',          alt: 'MB50',             hiRes: 'HiRes/MB50HiRes.jpg' },
      { src: 'TZR125Garden.jpg',  alt: 'TZR125 Garden',   hiRes: 'HiRes/TZR125GardenHiRes.jpg' },
      { src: 'TZR250Dad.jpg',     alt: 'TZR250 Dad',      hiRes: 'HiRes/TZR250DadHiRes.jpg' },
      { src: 'YZF1000RCold.jpg',  alt: 'YZF1000R Cold',   hiRes: 'HiRes/YZF1000RColdHiRes.jpg' },
    ],
  },
}

export const gallerySections = [
  { key: 'car',        label: 'Belmont Turbo',     preview: 'CarAtShow.jpg' },
  { key: 'engine',     label: 'Engine',            preview: 'Engine.jpg' },
  { key: 'styling',    label: 'Styling',           preview: 'Dash.jpg' },
  { key: 'ice',        label: 'ICE',               preview: 'Amps.jpg' },
  { key: 'rebuild',    label: 'How It Was Built',  preview: 'Working.jpg' },
  { key: 'events',     label: 'Events',            preview: 'Snetterton.jpg' },
  { key: 'carhistory', label: 'Previous Cars',     preview: 'H470FMJSide.jpg' },
  { key: 'motorbikes', label: 'Motorbikes',        preview: 'YZF1000RCold.jpg' },
]
