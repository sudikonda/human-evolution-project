export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  importance: 'major' | 'minor';
}

export interface Species {
  id: string;
  name: string;
  scientificName: string;
  period: string;
  description: string;
  characteristics: string[];
  image: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    year: '7 million years ago',
    title: 'First Hominins',
    description: 'The earliest known hominins, including Sahelanthropus tchadensis, begin to appear in Africa, marking the split between human and chimpanzee lineages.',
    image: 'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '2',
    year: '4 million years ago',
    title: 'Australopithecus',
    description: 'Australopithecus species emerge, with evidence of bipedal walking while retaining ape-like features.',
    image: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '3',
    year: '3.2 million years ago',
    title: 'Lucy',
    description: 'The famous Australopithecus afarensis specimen "Lucy" lives in what is now Ethiopia.',
    image: 'https://images.pexels.com/photos/60582/florence-tuscany-italy-landscape-60582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '4',
    year: '2.8 million years ago',
    title: 'Earliest Homo',
    description: 'The earliest members of the genus Homo appear, showing increased brain size compared to australopithecines.',
    image: 'https://images.pexels.com/photos/1202276/pexels-photo-1202276.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '5',
    year: '2.6 million years ago',
    title: 'Stone Tools',
    description: 'The earliest known stone tools (Oldowan industry) begin to appear in the archaeological record.',
    image: 'https://images.pexels.com/photos/4050338/pexels-photo-4050338.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '6',
    year: '1.9 million years ago',
    title: 'Homo erectus',
    description: 'Homo erectus emerges and becomes the first hominin species to leave Africa and spread across Asia.',
    image: 'https://images.pexels.com/photos/7236420/pexels-photo-7236420.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '7',
    year: '1 million years ago',
    title: 'Control of Fire',
    description: 'Evidence suggests early humans begin to control fire, revolutionizing diet, protection, and social gathering.',
    image: 'https://images.pexels.com/photos/266706/pexels-photo-266706.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '8',
    year: '600,000 years ago',
    title: 'Homo heidelbergensis',
    description: 'Homo heidelbergensis emerges as a likely ancestor to both Neanderthals and modern humans.',
    image: 'https://images.pexels.com/photos/17795848/pexels-photo-17795848/free-photo-of-monument-showing-human-evolution.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'minor'
  },
  {
    id: '9',
    year: '300,000 years ago',
    title: 'Earliest Homo sapiens',
    description: 'The earliest fossils of anatomically modern Homo sapiens appear in Africa.',
    image: 'https://images.pexels.com/photos/17686646/pexels-photo-17686646/free-photo-of-human-evolution-monuments-in-park.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '10',
    year: '200,000 years ago',
    title: 'Neanderthals Thrive',
    description: 'Neanderthals (Homo neanderthalensis) thrive across Europe and Western Asia, developing sophisticated tools and cultural practices.',
    image: 'https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '11',
    year: '70,000 years ago',
    title: 'Human Migration from Africa',
    description: 'Modern humans migrate out of Africa and begin to spread across the globe.',
    image: 'https://images.pexels.com/photos/7925859/pexels-photo-7925859.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '12',
    year: '40,000 years ago',
    title: 'Cave Art',
    description: 'Humans create sophisticated cave paintings and figurative art in Europe, showing advanced symbolic thinking.',
    image: 'https://images.pexels.com/photos/6105588/pexels-photo-6105588.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '13',
    year: '30,000 years ago',
    title: 'Neanderthal Extinction',
    description: 'Neanderthals go extinct, leaving Homo sapiens as the only surviving human species.',
    image: 'https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  },
  {
    id: '14',
    year: '12,000 years ago',
    title: 'Agricultural Revolution',
    description: 'Humans begin transitioning from hunter-gatherer lifestyles to agricultural settlements, marking the beginning of civilization.',
    image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1600',
    importance: 'major'
  }
];

export const speciesData: Species[] = [
  {
    id: 'australopithecus',
    name: 'Australopithecus',
    scientificName: 'Australopithecus afarensis',
    period: '3.9 - 2.9 million years ago',
    description: 'One of the longest-lived and best-known early human species, Australopithecus afarensis was bipedal but retained many ape-like features in its skull, teeth, and skeleton.',
    characteristics: [
      'Brain size approximately 380-430 cc',
      'Height: 3\'7" to 5\'0" (males taller than females)',
      'Bipedal walking but retained ability to climb trees',
      'Protruding jaw with large teeth'
    ],
    image: 'https://images.pexels.com/photos/3214959/pexels-photo-3214959.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'homo-habilis',
    name: 'Homo habilis',
    scientificName: 'Homo habilis',
    period: '2.4 - 1.5 million years ago',
    description: 'Homo habilis, or "handy man," was one of the earliest members of the genus Homo. This species is associated with the earliest stone tools and showed an increase in brain size compared to australopithecines.',
    characteristics: [
      'Brain size approximately 550-687 cc',
      'Height: about 3\'4" to 4\'5"',
      'Still had relatively long arms',
      'Used simple stone tools (Oldowan)',
      'More human-like teeth than Australopithecus'
    ],
    image: 'https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'homo-erectus',
    name: 'Homo erectus',
    scientificName: 'Homo erectus',
    period: '1.9 million - 110,000 years ago',
    description: 'Homo erectus was the first human species to spread beyond Africa, colonizing most of the Old World. They had a larger brain, modern body proportions, and likely controlled fire and used more sophisticated tools.',
    characteristics: [
      'Brain size approximately 800-1100 cc',
      'Height similar to modern humans',
      'Fully adapted for long-distance walking and running',
      'Used more advanced tools (Acheulean hand axes)',
      'Evidence of controlled use of fire',
      'Reduced sexual dimorphism compared to earlier species'
    ],
    image: 'https://images.pexels.com/photos/7232665/pexels-photo-7232665.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'neanderthal',
    name: 'Neanderthal',
    scientificName: 'Homo neanderthalensis',
    period: '400,000 - 40,000 years ago',
    description: 'Neanderthals were a human species that lived in Europe and parts of Asia. Well-adapted to cold climates, they had a sophisticated culture including burial of their dead, care for injured group members, and complex tools.',
    characteristics: [
      'Brain size comparable or larger than modern humans (1200-1750 cc)',
      'Robust, muscular build with shorter limbs',
      'Prominent brow ridges and receding chin',
      'Advanced tool technology (Mousterian)',
      'Evidence of symbolic behavior and possibly language',
      'Interbred with Homo sapiens'
    ],
    image: 'https://images.pexels.com/photos/3214969/pexels-photo-3214969.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'homo-sapiens',
    name: 'Modern Humans',
    scientificName: 'Homo sapiens',
    period: '300,000 years ago - present',
    description: 'Homo sapiens evolved in Africa and eventually spread to every continent. Modern humans are characterized by a large brain, slender build, language abilities, and complex symbolic thinking that enabled technological innovations and cultural development.',
    characteristics: [
      'Brain size 1000-1400 cc',
      'Slender build compared to earlier Homo species',
      'High, rounded skull with a vertical forehead',
      'Small brow ridges and pronounced chin',
      'Complex language capabilities',
      'Advanced abstract thinking and symbolic behavior',
      'Tremendous cultural and technological innovation'
    ],
    image: 'https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];