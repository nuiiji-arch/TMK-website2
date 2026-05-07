import { LucideIcon, Sprout, Zap, HeartPulse, ShieldCheck, Globe, Scale, Landmark, MapPin, Phone, Mail, Clock, ChevronRight, Menu, X, Landmark as Building } from 'lucide-react';

export type Language = 'en' | 'th';

export interface NavItem {
  label: { en: string; th: string };
  href: string;
}

export const navItems: NavItem[] = [
  { label: { en: 'Home', th: 'หน้าแรก' }, href: '#home' },
  { label: { en: 'About Us', th: 'เกี่ยวกับเรา' }, href: '#about' },
  { label: { en: 'Our Businesses', th: 'ธุรกิจของเรา' }, href: '#businesses' },
  { label: { en: 'Partnership', th: 'พันธมิตร' }, href: '#partnership' },
  { label: { en: 'Contact', th: 'ติดต่อเรา' }, href: '#contact' },
];

export const content = {
  hero: {
    title: {
      en: 'Empowering Sustainable Growth Across Asia',
      th: 'ขับเคลื่อนการเติบโตอย่างยั่งยืน เชื่อมโยงนวัตกรรมระดับโลกสู่ภูมิภาคเอเชีย'
    },
    subtitle: {
      en: 'TMK Thaimongkol Rice Mill Co., Ltd. (TMK Group) is a leading international trading and strategic advisory firm. We merge global networks with local expertise to deliver innovative solutions in agriculture, clean energy, and healthcare.',
      th: 'บริษัท ไทยมงคล จำกัด (TMK Group) ผู้นำด้านการค้าระหว่างประเทศและที่ปรึกษาเชิงกลยุทธ์ เราผสานเครือข่ายระดับโลกเข้ากับความเชี่ยวชาญในท้องถิ่น เพื่อส่งมอบโซลูชันด้านนวัตกรรมการเกษตร พลังงานสะอาด และสุขภาพและคุณภาพชีวิต'
    },
    cta1: { en: 'Discover Our Businesses', th: 'ทำความรู้จักธุรกิจของเรา' },
    cta2: { en: 'Partner With Us', th: 'ร่วมเป็นพันธมิตรกับเรา' }
  },
  about: {
    title: { en: 'About Us', th: 'เกี่ยวกับเรา' },
    legacyTitle: { en: 'Our Legacy & Evolution', th: 'ประวัติและการก้าวสู่อนาคต' },
    legacyText: {
      en: 'From our solid foundations in traditional agriculture (TMK Thaimongkol Rice Mill), we have transformed into an International Trading Conglomerate. Our expertise now spans three major pillars: agricultural innovations, sustainable bio-energy, and cutting-edge medical supplies.',
      th: 'จากรากฐานที่มั่นคงในอุตสาหกรรมเกษตรกรรมดั้งเดิม (TMK Thaimongkol Rice Mill) เราได้ทรานส์ฟอร์มองค์กรด้วยวิสัยทัศน์ที่กว้างไกล สู่การเป็นกลุ่มบริษัทการค้าระหว่างประเทศ (International Trading Conglomerate) ที่มีความเชี่ยวชาญครอบคลุม 3 เสาหลักทางธุรกิจ ได้แก่ นวัตกรรมปุ๋ยเคมี พลังงานชีวภาพเพื่อความยั่งยืน และเวชภัณฑ์และเครื่องมือแพทย์ชั้นนำ'
    },
    visionTitle: { en: 'Vision', th: 'วิสัยทัศน์' },
    visionText: {
      en: 'To be the most trusted international business partner driving food security, clean energy, and quality of life in Asia.',
      th: 'เป็นพันธมิตรทางธุรกิจระดับสากลที่ได้รับความไว้วางใจสูงสุด ในการขับเคลื่อนความมั่นคงทางอาหาร พลังงานสะอาด และคุณภาพชีวิตที่ดี สู่ภูมิภาคเอเชีย'
    },
    missionTitle: { en: 'Mission', th: 'พันธกิจ' },
    missions: [
      {
        icon: Sprout,
        text: {
          en: 'Agriculture: Elevating agricultural yields with world-class premium fertilizers.',
          th: 'Agriculture: ยกระดับผลผลิตทางการเกษตรด้วยปุ๋ยเคมีคุณภาพสูงจากแหล่งผลิตชั้นนำของโลก'
        }
      },
      {
        icon: Zap,
        text: {
          en: 'Sustainability: Driving the energy transition via Bio-ethanol distribution and ISCC consulting.',
          th: 'Sustainability: เป็นฟันเฟืองสำคัญในการเปลี่ยนผ่านสู่พลังงานสะอาด (Energy Transition) ผ่านการจัดจำหน่าย Bio-ethanol และการให้คำปรึกษามาตรฐาน ISCC'
        }
      },
      {
        icon: HeartPulse,
        text: {
          en: 'Healthcare: Selecting and importing Japanese medical devices to support an aging society.',
          th: 'Healthcare: คัดสรรและนำเข้าเครื่องมือแพทย์และเวชภัณฑ์จากประเทศญี่ปุ่น เพื่อรองรับสังคมผู้สูงอายุและยกระดับสาธารณสุข'
        }
      },
      {
        icon: ShieldCheck,
        text: {
          en: 'Excellence: Operating with integrity and supply chain expertise for maximum efficiency.',
          th: 'Excellence: ดำเนินธุรกิจภายใต้หลักธรรมาภิบาล พร้อมความเชี่ยวชาญด้านกฎหมายศุลกากรและเศรษฐศาสตร์การขนส่ง'
        }
      }
    ]
  },
  businesses: {
    title: { en: 'Our Business Units', th: 'หน่วยธุรกิจของเรา' },
    units: [
      {
        id: 'agri',
        title: { en: 'Agricultural Solutions', th: 'นวัตกรรมเพื่อการเกษตร' },
        subtitle: { en: 'Elevating Thai Agriculture with Global Innovation', th: 'ยกระดับเกษตรกรรมไทย ด้วยนวัตกรรมระดับสากล' },
        description: {
          en: 'We are a premier importer and distributor of high-quality fertilizers from Saudi Arabia, a global petrochemical hub.',
          th: 'เราคือผู้นำเข้าและจัดจำหน่ายปุ๋ยเคมีคุณภาพสูงจาก ราชอาณาจักรซาอุดีอาระเบีย ซึ่งเป็นศูนย์กลางปิโตรเคมีและทรัพยากรแร่ธาตุระดับโลก'
        },
        brands: [
          { name: 'NORUS', desc: { en: 'Premium formulas for sustainable soil and growth.', th: 'ปุ๋ยสูตรพรีเมียมเพื่อการเจริญเติบโตที่ยั่งยืน' } },
          { name: 'GRANDSOL', desc: { en: 'Advanced innovations for soil conditioning and maximum yield.', th: 'นวัตกรรมปุ๋ยที่ปรับสภาพดินและเพิ่มผลผลิตขั้นสุด' } }
        ],
        advantage: {
          en: 'Our customs law and logistics expertise ensures cost-efficiency and reliable delivery to farmers and dealers.',
          th: 'ด้วยความเชี่ยวชาญด้านกฎหมายศุลกากรและการบริหารจัดการ Logistics ทำให้เรารักษาระดับต้นทุนและจัดส่งสินค้าถึงมือเกษตรกรและตัวแทนจำหน่ายได้อย่างมีประสิทธิภาพสูงสุด'
        },
        image: '/src/assets/images/regenerated_image_1778128565833.png'
      },
      {
        id: 'energy',
        title: { en: 'Sustainable Energy', th: 'พลังงานยั่งยืน' },
        subtitle: { en: 'Connecting Clean Energy to Global Standards', th: 'เชื่อมโยงพลังงานสะอาด สู่มาตรฐานระดับโลก' },
        description: {
          en: 'Strategic partnerships with Japanese industry leaders for high-quality Bio-ethanol distribution.',
          th: 'TMK Group เล็งเห็นถึงความสำคัญของการลดการปล่อยก๊าซเรือนกระจก เราได้สร้างพันธมิตรเชิงกลยุทธ์กับกลุ่มนักธุรกิจชาวญี่ปุ่น เพื่อเป็นตัวแทนจัดจำหน่าย ไบโอเอทานอล (Bio-ethanol) คุณภาพสูง'
        },
        points: [
          { en: 'Main distributor for Nakagawa Bussan and top Japanese energy firms across Japan and Vietnam.', th: 'เป็นตัวแทนจัดจำหน่ายหลักให้กับ Nakagawa Bussan และบริษัทพลังงานชั้นนำอื่นๆ ครอบคลุมตลาดใน ประเทศญี่ปุ่น และ ประเทศเวียดนาม' },
          { en: 'Integrated ISCC Certification consulting for bio-ethanol producers exporting to Japan.', th: 'ที่ปรึกษา (Strategic Consultant) ครบวงจรสำหรับโรงงานผู้ผลิตไบโอเอทานอลที่ต้องการส่งออกไปยังประเทศญี่ปุ่น โดยช่วยเตรียมความพร้อมให้ผ่านการรับรองมาตรฐานสากล ISCC' }
        ],
        image: '/src/assets/images/regenerated_image_1778129245287.png'
      },
      {
        id: 'healthcare',
        title: { en: 'Healthcare Innovations', th: 'นวัตกรรมสุขภาพ' },
        subtitle: { en: 'Caring for Quality of Life with Japanese Standards', th: 'ดูแลคุณภาพชีวิต ด้วยมาตรฐานจากประเทศญี่ปุ่น' },
        description: {
          en: 'Responsive solutions for the growing healthcare sector and the aging society.',
          th: 'เพื่อตอบสนองต่อการขยายตัวของอุตสาหกรรม Healthcare และการก้าวเข้าสู่สังคมผู้สูงอายุ (Aging Society)'
        },
        points: [
          { en: 'Medical devices certified by advanced Japanese technology.', th: 'เครื่องมือแพทย์ที่ได้มาตรฐานและผ่านการรับรองเทคโนโลยีขั้นสูงจากประเทศญี่ปุ่น' },
          { en: 'Healthcare products designed to enhance overall quality of life.', th: 'เวชภัณฑ์และผลิตภัณฑ์ดูแลสุขภาพที่ออกแบบมาเพื่อยกระดับคุณภาพชีวิต' }
        ],
        advantage: {
          en: 'Direct collaboration with Japanese manufacturers ensuring transparent and regulatory-compliant importation.',
          th: 'เราร่วมมือกับผู้ผลิตและโรงงานในญี่ปุ่นโดยตรง พร้อมกระบวนการนำเข้าที่โปร่งใสและถูกต้องตามกฎระเบียบขององค์การอาหารและยา (อย.)'
        },
        image: '/src/assets/images/regenerated_image_1778140677621.png'
      }
    ]
  },
  whyUs: {
    title: { en: 'Why Partner With Us', th: 'ทำความเลือก TMK Group' },
    reasons: [
      {
        icon: Globe,
        title: { en: 'Global Network', th: 'เครือข่ายระดับโลก' },
        text: { en: 'Strong connections in Saudi Arabia, Japan, Vietnam, and Thailand.', th: 'เครือข่ายที่แข็งแกร่งตั้งแต่ ซาอุดีอาระเบีย ญี่ปุ่น เวียดนาม จนถึงประเทศไทย' }
      },
      {
        icon: Scale,
        title: { en: 'Regulatory Mastery', th: 'เชี่ยวชาญด้านกฎระเบียบ' },
        text: { en: 'In-depth expertise in international customs law and trade agreements.', th: 'ความเชี่ยวชาญเชิงลึกด้านกฎหมายศุลกากรระหว่างประเทศ (Customs Law) และข้อตกลงทางการค้า' }
      },
      {
        icon: Landmark,
        title: { en: 'Financial Stability', th: 'ความมั่นคงทางการเงิน' },
        text: { en: 'Strong project finance and transport economics vision to manage logistics costs.', th: 'มีความมั่นคงทางการเงิน และวิสัยทัศน์ด้านเศรษฐศาสตร์การขนส่ง (Transport Economics)' }
      },
      {
        icon: Building,
        title: { en: 'End-to-End Solutions', th: 'โซลูชันครบวงจร' },
        text: { en: 'We are solution providers creating value across the entire supply chain.', th: 'เราไม่เพียงแค่ซื้อมาขายไป แต่เราเป็น Solution Provider ที่สร้างมูลค่าเพิ่ม (Value Added)' }
      }
    ]
  },
  contact: {
    title: { en: 'Contact Us', th: 'ติดต่อเรา' },
    address: { en: '30 Moo 3, Sampao Lom, Phra Nakhon Si Ayutthaya, 13000', th: '30 หมู่ 3 ตำบลสำเภาล่ม อำเภอพระนครศรีอยุธยา จังหวัดพระนครศรีอยุธยา 13000' },
    phone: '01-234-5678',
    email: 'info@tmkgroup.co.th',
    hours: { en: 'Mon - Fri (08:30 - 17:30)', th: 'จันทร์ - ศุกร์ (08:30 - 17:30 น.)' }
  }
};
