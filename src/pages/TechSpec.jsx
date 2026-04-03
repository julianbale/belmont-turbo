const specs = [
  {
    label: 'Engine',
    text: '1998cc, 16-valve Astra mark III GSI engine. Courtenay 250/260 turbo, boosting at 15psi. Charge Cooler. Colour coded rocker cover and strut brace. High lift CAMs. Jetex custom-made 2.5″ exhaust system. Simmer switch. Jamex colour coded bonnet lifts.',
  },
  {
    label: 'Transmission',
    text: 'Cavalier Turbo 6 speed box, converted to front wheel drive. Limited Slip Differential and uprated clutch.',
  },
  {
    label: 'Suspension',
    text: 'Jamex springs lowered 40mm with Spax adjustable shocks front and rear. 16V GTE rear axle adding an anti roll bar and disks. Power Flex bushes throughout.',
  },
  {
    label: 'Brakes',
    text: 'Custom made 315mm disks with large 4 pot Wilwood calipers. Front / Rear adjustable bias switch. 16V GTE G-Force rear disks with G-Force pads. ABS from GTE 16V. Wheels 17″ ATP Vipers, with Goodyear Eagle F1 215/40 ZR17s. (Very good in the wet!!)',
  },
  {
    label: 'Bodywork',
    text: 'Carflair body kit with M3 door mirrors. Front remade with deeper spoiler. GSI bonnet vents, twin headlight conversion. Belmont SRI rear spoiler and frogeye front fog lights.',
  },
  {
    label: 'Interior',
    text: 'LCD Dash, Momo wheel and gear knob, heated leather seats from Cavalier Turbo and leather trim including door cards. Bolt on pedals, turbo boost gauge instead of a clock and locks made into dummies. JL free air subs, Caliber 360w 2 channel amp powering 6″ Polk DB series component speakers in custom door builds. Sony 10 disk CD Changer with ESP.',
  },
  {
    label: 'Performance',
    text: '265 BHP (was 210 BHP — ¼ mile in 14.73 seconds at 97.1 mph at UFC 97). Top speed around 150 mph, 0–60 just over 6 seconds (estimated). Times based on full tank, ICE and spare wheel. I guess the fastest Belmont in the country!',
  },
  {
    label: 'Future',
    text: 'Green injectors, new map for the CPU, maybe 280–300 bhp. USC2000 ¼ mile with over 100 mph terminal speed. Bright coloured respray.',
  },
]

export default function TechSpec() {
  return (
    <>
      <h2 className="page-title">Tech Spec</h2>
      <ul className="spec-list">
        {specs.map(({ label, text }) => (
          <li key={label} className="spec-item">
            <span className="spec-label">{label}: </span>
            {text}
          </li>
        ))}
      </ul>
    </>
  )
}
