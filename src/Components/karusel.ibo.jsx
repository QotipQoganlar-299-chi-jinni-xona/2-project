import React from 'react';
import { FiCreditCard, FiRepeat, FiMonitor, FiTruck } from 'react-icons/fi';
import { LaptopPair, Desktop, PhoneAndMac, IpadAndMac, WatchAndMac } from './mac-art.ibo';

const air = [{ name: 'Midnight', hex: '#2e3642' }, { name: 'Starlight', hex: '#efe6d3' }, { name: 'Space Gray', hex: '#7d7e80' }, { name: 'Silver', hex: '#d9dadd' }];
const pro = [{ name: 'Space Black', hex: '#2c2c2e' }, { name: 'Silver', hex: '#d9dadd' }, { name: 'Space Gray', hex: '#7d7e80' }];
const imac = [{ name: 'Blue', hex: '#7ea6d8' }, { name: 'Green', hex: '#7cc29a' }, { name: 'Silver', hex: '#d9dadd' }];
const one = (hex) => [{ name: 'Silver', hex }];

export const lineup = {
  Laptops: [
    {
      id: 'air', name: 'MacBook Air 13″ and 15″', label: 'New M3 models', chip: 'M2 or M3 chip',
      desc: 'Strikingly thin and fast so you can work, play, or create anywhere.',
      price: 'From $999 or $83.25/mo. for 12 mo.', colors: air,
      art: (tone) => <LaptopPair id="air" tone={tone} />,
      specs: [
        { type: 'text', big: '13.6″ or 15.3″', small: 'Liquid Retina display with 500 nits of brightness and support for 1 billion colors‡' },
        { type: 'chips', chips: ['M2', 'M3'], small: 'Apple M2 or M3 chip' },
        { type: 'stat', top: 'Up to', big: '18 hours', small: 'battery life‡' },
        { type: 'stat', top: 'Up to', big: '4 ports', small: '2x Thunderbolt / USB 4, headphone jack, MagSafe' },
        { type: 'stat', big: '2.7 lb. or 3.3 lb.', small: 'Weight' },
      ],
    },
    {
      id: 'pro', name: 'MacBook Pro 14″ and 16″', chip: 'M3, M3 Pro, or M3 Max chip',
      desc: 'The most advanced Mac laptops for demanding workflows.',
      price: 'From $1599 or $133.25/mo. for 12 mo.', colors: pro,
      art: (tone) => <LaptopPair id="pro" pro tone={tone} />,
      specs: [
        { type: 'text', big: '14.2″ or 16.2″', small: 'Liquid Retina XDR display with 1000 nits of HDR and 600 nits of SDR brightness and support for 120Hz refresh rate‡' },
        { type: 'chips', chips: ['M3', 'M3 Pro', 'M3 Max'], small: 'Apple M3, M3 Pro, or M3 Max chip' },
        { type: 'stat', top: 'Up to', big: '22 hours', small: 'battery life‡' },
        { type: 'stat', top: 'Up to', big: '7 ports', small: '2x Thunderbolt / USB 4 or 3x Thunderbolt 4, HDMI, SDXC, headphone jack, MagSafe' },
        { type: 'stat', big: '3.4 lb. or 4.7 lb.', small: 'Weight' },
      ],
    },
  ],
  Desktops: [
    {
      id: 'imac', name: 'iMac', label: 'New M3 models', chip: 'M3 chip',
      desc: 'Packed with performance. Pure joy.',
      price: 'From $1299 or $108.25/mo. for 12 mo.', colors: imac,
      art: (tone) => <Desktop kind="imac" tone={tone} />,
      specs: [
        { type: 'text', big: '24″', small: '4.5K Retina display with 500 nits of brightness and support for 1 billion colors' },
        { type: 'chips', chips: ['M3'], small: 'Apple M3 chip' },
        { type: 'stat', top: 'Up to', big: '24GB', small: 'unified memory' },
        { type: 'stat', top: 'Up to', big: '4 ports', small: '2x Thunderbolt / USB 4, 2x USB 3, Gigabit Ethernet' },
        { type: 'stat', big: '9.88 lb.', small: 'Weight' },
      ],
    },
    {
      id: 'mini', name: 'Mac mini', chip: 'M2 or M2 Pro chip',
      desc: 'Pro power in a compact desktop.',
      price: 'From $599 or $49.91/mo. for 12 mo.', colors: one('#c9ccd1'),
      art: () => <Desktop kind="mini" />,
      specs: [
        { type: 'text', big: '7.7″', small: 'Wide and just 1.4″ tall, so it fits right next to your display' },
        { type: 'chips', chips: ['M2', 'M2 Pro'], small: 'Apple M2 or M2 Pro chip' },
        { type: 'stat', top: 'Up to', big: '32GB', small: 'unified memory' },
        { type: 'stat', top: 'Up to', big: '9 ports', small: '4x Thunderbolt 4, 2x USB-A, HDMI, Ethernet, headphone jack' },
        { type: 'stat', big: '2.6 lb. or 2.8 lb.', small: 'Weight' },
      ],
    },
    {
      id: 'studio', name: 'Mac Studio', chip: 'M2 Max or M2 Ultra chip',
      desc: 'Outrageous performance. Extraordinary connectivity.',
      price: 'From $1999 or $166.58/mo. for 12 mo.', colors: one('#c9ccd1'),
      art: () => <Desktop kind="studio" />,
      specs: [
        { type: 'text', big: '7.7″', small: 'Wide and 3.7″ tall, with front and back ports for easy access' },
        { type: 'chips', chips: ['M2 Max', 'M2 Ultra'], small: 'Apple M2 Max or M2 Ultra chip' },
        { type: 'stat', top: 'Up to', big: '192GB', small: 'unified memory' },
        { type: 'stat', top: 'Up to', big: '12 ports', small: '6x Thunderbolt 4, 2x USB-A, HDMI, 10Gb Ethernet, SDXC, headphone jack' },
        { type: 'stat', big: '5.9 lb. or 7.9 lb.', small: 'Weight' },
      ],
    },
    {
      id: 'macpro', name: 'Mac Pro', chip: 'M2 Ultra chip',
      desc: 'Pro workflows with PCIe expansion.',
      price: 'From $6999 or $583.25/mo. for 12 mo.', colors: one('#c9ccd1'),
      art: () => <Desktop kind="pro" />,
      specs: [
        { type: 'text', big: 'Tower or rack', small: 'Built for the most demanding workflows with room to expand' },
        { type: 'chips', chips: ['M2 Ultra'], small: 'Apple M2 Ultra chip' },
        { type: 'stat', top: 'Up to', big: '192GB', small: 'unified memory' },
        { type: 'stat', top: 'Up to', big: '6 slots', small: 'PCI Express Gen 4 expansion, 8x Thunderbolt 4' },
        { type: 'stat', big: 'Over 37 lb.', small: 'Weight' },
      ],
    },
  ],
  Displays: [
    {
      id: 'studio-display', name: 'Studio Display', chip: '27-inch 5K Retina display',
      desc: 'A stunning display with a 12MP Center Stage camera.',
      price: 'From $1599 or $133.25/mo. for 12 mo.', colors: one('#d9dbe0'),
      art: () => <Desktop kind="studio-display" />,
      specs: [
        { type: 'text', big: '27″', small: '5K Retina display with 600 nits of brightness and support for 1 billion colors' },
        { type: 'chips', chips: ['A13'], small: 'A13 Bionic chip with 12MP Ultra Wide camera' },
        { type: 'stat', top: 'Up to', big: '600 nits', small: 'brightness' },
        { type: 'stat', top: 'Up to', big: '4 ports', small: 'Thunderbolt 3 and 3x USB-C' },
        { type: 'stat', big: '13.9 lb. or 14.8 lb.', small: 'Weight' },
      ],
    },
    {
      id: 'pro-display', name: 'Pro Display XDR', chip: '32-inch 6K Retina XDR display',
      desc: 'Extreme dynamic range for pro workflows.',
      price: 'From $4999 or $416.58/mo. for 12 mo.', colors: one('#cfd1d6'),
      art: () => <Desktop kind="pro-display" />,
      specs: [
        { type: 'text', big: '32″', small: '6K Retina XDR display with 1000 nits of sustained and 1600 nits of peak brightness' },
        { type: 'text', big: 'P3 color', small: 'Wide color gamut with 10-bit depth' },
        { type: 'stat', top: 'Up to', big: '1600 nits', small: 'peak brightness' },
        { type: 'stat', top: 'Up to', big: '4 ports', small: 'Thunderbolt 3 and 3x USB-C' },
        { type: 'stat', big: '16 lb.', small: 'Weight without stand' },
      ],
    },
  ],
};

export const perks = [
  { icon: <FiCreditCard />, title: 'Pay over time, interest-free.', text: <>When you choose to check out with Apple Card Monthly Installments.<sup><u>6</u></sup></>, more: 'Split the cost of your new Mac into equal monthly payments with no interest when you check out with Apple Card.' },
  { icon: <FiRepeat />, title: 'Save with Apple Trade In.', text: <>Get credit toward your next Mac when you trade in an eligible device.<sup><u>5</u></sup></>, more: 'Trade in your current computer, get an instant estimate, and apply the credit to your new Mac at checkout.' },
  { icon: <FiMonitor />, title: 'Customize your Mac.', text: 'Choose your chip, memory, storage, even color.', more: 'Configure your Mac exactly the way you want it, then have it engraved for free.' },
  { icon: <FiTruck />, title: 'Get flexible delivery and easy pickup.', text: 'Choose two-hour delivery from an Apple Store, free delivery, or pickup options.', more: 'Pick the delivery option that fits your day, or pick up your order at an Apple Store near you.' },
];

export const others = [
  { id: 'iphone', title: 'Mac and iPhone', art: <PhoneAndMac />, text: 'You can answer calls or messages from your iPhone directly on your Mac. Copy images, video, or text on your iPhone, then paste into another app on your nearby Mac. With iCloud, you can access your favorite files from either your iPhone or your Mac. And so much more.' },
  { id: 'ipad', title: 'Mac and iPad', art: <IpadAndMac />, text: 'Turn your iPad into a second display for your Mac with Sidecar, or use Universal Control to work across both devices with a single keyboard and mouse. Start a sketch on iPad and drop it right into a document on your Mac.' },
  { id: 'watch', title: 'Mac and Apple Watch', art: <WatchAndMac />, text: 'Unlock your Mac automatically when you’re wearing your Apple Watch. Approve app requests and authenticate purchases with a double-click of the side button — no password needed.' },
];

export const quizQuestions = [
  { q: 'What will you mainly use your Mac for?', options: ['Everyday tasks', 'Creative projects', 'Pro workflows'] },
  { q: 'Where will you use it most?', options: ['On the go', 'At a desk'] },
];

/* [kasb][joy] -> tavsiya */
export const quizResult = {
  'Everyday tasks': { 'On the go': ['Laptops', 'air'], 'At a desk': ['Desktops', 'imac'] },
  'Creative projects': { 'On the go': ['Laptops', 'pro'], 'At a desk': ['Desktops', 'studio'] },
  'Pro workflows': { 'On the go': ['Laptops', 'pro'], 'At a desk': ['Desktops', 'macpro'] },
};
