const originalTexts = new Map();

const mockTranslations = {
  'ar': {
    //index
    "We Think partnered with a fast-growing rewards and discounts platform to design and develop a complete loyalty program for their brand.": "تعاونت نحن نفكر مع منصة مكافآت وخصومات سريعة النمو لتصميم وتطوير برنامج ولاء متكامل لعلامتهم التجارية.",
    'Skip to content': 'تخطي إلى المحتوى',
    'logo-b': 'الشعار - ب',
    'Services': 'الخدمات',
    'Work': 'العمل',
    'Method': 'الطريقة',
    'About': 'حول',
    'Integration': 'التكامل',
    'Get In Touch': 'تواصل معنا',
    'From Ideas to Impact — With Intelligence Built In': 'من الأفكار إلى التأثير — مع الذكاء المدمج',
    'We develop custom software, mobile apps, web solutions, and enterprise systems with a strategic approach aimed at delivering continuous growth.': 'نحن نطور برمجيات مخصصة وتطبيقات الهاتف المحمول وحلول الويب وأنظمة المؤسسات بنهج استراتيجي يهدف إلى تحقيق النمو المستمر.',
    'View our latest work': 'عرض أحدث أعمالنا',
    'Innovation for Every Business': 'الابتكار لكل عمل',
    'We collaborate with businesses of all sizes to turn their ideas into smart digital solutions.': 'نتعاون مع الشركات من جميع الأحجام لتحويل أفكارهم إلى حلول رقمية ذكية.',
    // 'Simplifying DOT Compliance': 'تبسيط الامتثال لـ DOT',
    'Loyalty program': 'برنامج الولاء',
    // 'We Think partnered with a fast-growing rewards and discounts platform to design and develop a complete loyalty program for their brand.': 'تعاونت We Think مع منصة سريعة النمو للمكافآت والخصومات لتصميم وتطوير برنامج ولاء كامل لعلامتهم التجارية.',
    'eCommerce marketplace': 'سوق التجارة الإلكترونية',
    'We Think developed a full-featured eCommerce marketplace platform for clients seeking a system similar to Amazon or Daraz.': 'طورت We Think منصة تجارة إلكترونية متكاملة للعملاء الذين يبحثون عن نظام مشابه لأمازون أو داراز.',
    'Real Estate Sign': 'لافتات العقارات',
    'We Think partnered with a U.S.-based real estate signage company to build a complete digital solution for managing sign installation requests.': 'تعاونت We Think مع شركة أمريكية للافتات العقارية لبناء حل رقمي كامل لإدارة طلبات تركيب اللافتات.',
    'Education Platform': 'منصة تعليمية',
    'We Think partnered with a private school to build a complete education management platform that supports digital learning, communication, and operations.': 'تعاونت We Think مع مدرسة خاصة لبناء منصة إدارة تعليمية كاملة تدعم التعلم الرقمي والتواصل والعمليات.',
    'Android Apps': 'تطبيقات أندرويد',
    'AI': 'الذكاء الاصطناعي',
    'Web Apps': 'تطبيقات الويب',
    'UI Design': 'تصميم واجهة المستخدم',
    'DevOps': 'عمليات التطوير',
    'Process Automation': 'أتمتة العمليات',
    'IoT': 'إنترنت الأشياء',
    'iOS Apps': 'تطبيقات iOS',
    'Business Process Redesign': 'إعادة تصميم العمليات التجارية',
    'Mobile Apps': 'تطبيقات الجوال',
    'UX Design': 'تصميم تجربة المستخدم',
    'Smart Innovation. Proven Delivery.': 'ابتكار ذكي. تنفيذ مثبت.',
    'For over 10 years, we’ve refined an agile, AI-driven process that transforms ideas into high-performing digital solutions—faster than ever.': 'على مدار أكثر من 10 سنوات، قمنا بتطوير عملية مرنة تعتمد على الذكاء الاصطناعي تحول الأفكار إلى حلول رقمية عالية الأداء — أسرع من أي وقت مضى.',
    'projects delivered': 'مشاريع تم تسليمها',
    'satisfied clients': 'عملاء راضون',
    'Net Promoter Score (NPS)': 'مؤشر صافي الترويج',
    'Digital Transformation, Perfected': 'التحول الرقمي المُتقن',
    'Crafting digital experiences that matter. We transform businesses and lives by creating innovative products that resonate with millions.': 'نصنع تجارب رقمية تحدث فرقاً. نحن نحول الأعمال والحياة من خلال إنشاء منتجات مبتكرة تصل إلى الملايين.',
    'Estimate Project': 'تقدير المشروع',
    'Web Development': 'تطوير الويب',
    'Beautiful on the outside. Powerful under the hood.': 'جميل من الخارج. قوي في الداخل.',
    'Digital Marketing': 'التسويق الرقمي',
    'Right message, right people, right time—every time.': 'الرسالة الصحيحة، للأشخاص المناسبين، في الوقت المناسب — دائمًا.',
    'Application & Software Development': 'تطوير التطبيقات والبرمجيات',
    'Smart apps. Real results. Built to grow with you.': 'تطبيقات ذكية. نتائج حقيقية. مصممة للنمو معك.',
    'Content Creation': 'إنشاء المحتوى',
    'Words that work. Stories that stick.': 'كلمات فعالة. قصص لا تُنسى.',
    'Search Engine Optimization (SEO)': 'تحسين محركات البحث (SEO)',
    'Be seen where it matters—at the top of the search.': 'كن مرئياً حيث يهم — في أعلى نتائج البحث.',
    'Your Vision, Our Execution': 'رؤيتك، تنفيذنا',
    'We excel at turning challenges into opportunities. Our adaptable process ensures your project succeeds.': 'نحن نتميز في تحويل التحديات إلى فرص. تضمن عمليتنا المرنة نجاح مشروعك.',
    'Discovery and Ideation': 'الاستكشاف وتوليد الأفكار',
    'Deep dive into your project. We collaborate closely to understand your goals, challenges, and target audience.': 'نغوص عميقًا في مشروعك. نتعاون معك لفهم أهدافك وتحدياتك وجمهورك المستهدف.',
    'Full-Stack Mastery.': 'إتقان تام لجميع التقنيات.',
    'Accelerating Innovation for 15 Years. We’ve perfected a high-speed process that consistently delivers exceptional results.': 'نُسرّع الابتكار منذ 15 عامًا. أتقنّا عملية عالية السرعة تقدم نتائج استثنائية باستمرار.',
    'Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the': 'نُعزز ابتكارات المستقبل — نساعد أصحاب الرؤية في التصميم والبناء والتوسيع باستخدام',
    'Power of AI': 'قوة الذكاء الاصطناعي',
    'Facebook': 'فيسبوك',
    'Twitter': 'تويتر',
    'Instagram': 'إنستغرام',
    'Linkedin': 'لينكدإن',
    'CONTACT': 'تواصل',
    'support@qodiy.com': 'support@qodiy.com',
    '+966 567-987-666': '+966 567-987-666',
    'Riyadh, Saudi Arabia': 'الرياض، المملكة العربية السعودية',
    'COMPANY': 'الشركة',
    'Contact': 'اتصل بنا',
    'Web Development Service': 'خدمة تطوير الويب',
    'App Development Service': 'خدمة تطوير التطبيقات',
    'SEO': 'تحسين محركات البحث',
    '© 2015-2025 Qodiy. All rights reserved.': '© 2015-2025 Qodiy. جميع الحقوق محفوظة.',
    'Terms of use': 'شروط الاستخدام',
    'Privacy Policy': 'سياسة الخصوصية',
    'Sitemap': 'خريطة الموقع',
    'Code the Future. Build Beyond': 'برمج المستقبل. ابنِ لما هو أبعد.',
    'Scroll to Top': 'العودة إلى الأعلى',

    //about
    "The Qodiy Story": "قصة Qodiy",
    "Skip to content": "تخطي إلى المحتوى",
    "logo-b": "الشعار - ب",
    "Services": "الخدمات",
    "Work": "العمل",
    "Method": "الطريقة",
    "About": "حول",
    "At the edge of innovation, We Think is proud to be one of": "في طليعة الابتكار، تفخر We Think بكونها واحدة من",
    "KSA’s leading software companies—bringing innovative,": "شركات البرمجيات الرائدة في المملكة العربية السعودية — تقدم حلولًا مبتكرة،",
    "reliable, and forward-thinking IT solutions to": "موثوقة ومتقدمة في تكنولوجيا المعلومات",
    "businesses of all sizes. From concept": "لكافة أحجام الشركات. من الفكرة",
    "to code, we turn bold ideas into powerful digital": "إلى البرمجة، نحول الأفكار الجريئة إلى منتجات رقمية قوية",
    "products.": "فعالة.",
    "Integration": "التكامل",
    "Get In Touch": "تواصل معنا",
    "From Ideas to Impact — With Intelligence Built In": "من الأفكار إلى التأثير — مع الذكاء المدمج",
    "We develop custom software, mobile apps, web solutions, and enterprise systems with a strategic approach aimed at delivering continuous growth.": "نحن نطور برامج مخصصة، وتطبيقات جوال، وحلول ويب، وأنظمة مؤسسات بنهج استراتيجي يهدف إلى تحقيق نمو مستمر.",
    "View our latest work": "عرض أحدث أعمالنا",
    "Innovation for Every Business": "الابتكار لكل عمل",
    "We collaborate with businesses of all sizes to turn their ideas into smart digital solutions.": "نتعاون مع الشركات من جميع الأحجام لتحويل أفكارهم إلى حلول رقمية ذكية.",
    // "Simplifying DOT Compliance": "تبسيط الامتثال لـ DOT",
        'Skip to content': 'تخطي إلى المحتوى',
    'logo-b': 'الشعار-ب',
    'Services': 'الخدمات',
    'Work': 'العمل',
    'Method': 'الطريقة',
    'About': 'حول',
    'Integration': 'التكامل',
    'Get In Touch': 'تواصل معنا',
    'The Qodiy Story': 'قصة كودي',    
    'AI-Powered Innovation': 'ابتكار مدعوم بالذكاء الاصطناعي',
    'Your Technology Partner Making The World Go Round.': 'شريكك التقني الذي يجعل العالم يدور.',
    'We Think is a creative software and technology company based in Saudi Arabia. We help businesses, startups, and brands grow with smart digital solutions—from mobile apps and websites to software systems, design, content, and online marketing.':
      'We Think هي شركة برمجيات وتكنولوجيا إبداعية مقرها السعودية. نساعد الشركات الناشئة والعلامات التجارية على النمو من خلال حلول رقمية ذكية—من تطبيقات الجوال والمواقع الإلكترونية إلى الأنظمة البرمجية والتصميم والمحتوى والتسويق الرقمي.',

    'Our Story': 'قصتنا',
    'Our goal is simple: make your ideas work better using the right technology.':
      'هدفنا بسيط: نجعل أفكارك تعمل بشكل أفضل باستخدام التكنولوجيا المناسبة.',
    'At We Think, every project is a chance to build something meaningful. We’re a team of skilled and passionate people who care about quality and understand the value of time.':
      'في We Think، كل مشروع هو فرصة لبناء شيء له معنى. نحن فريق من الأشخاص الموهوبين والمتحمسين الذين يهتمون بالجودة ويدركون قيمة الوقت.',
    'Our work focuses on results—helping you reach your audience, improve your services, and grow faster.':
      'يركز عملنا على النتائج—نساعدك في الوصول إلى جمهورك، وتحسين خدماتك، والنمو بشكل أسرع.',
    'Over the years, we’ve earned the trust of clients across different industries by staying honest, creative, and committed. We don’t just deliver services—we build long-term partnerships by always putting your goals first.':
      'على مر السنين، اكتسبنا ثقة العملاء في مختلف الصناعات من خلال الصدق والإبداع والالتزام. نحن لا نقدم خدمات فقط—بل نبني شراكات طويلة الأمد من خلال وضع أهدافك أولاً.',
    'If you’re looking for a one-stop team to handle development, design, content, and digital marketing, We Think is here to help.':
      'إذا كنت تبحث عن فريق شامل للتطوير والتصميم والمحتوى والتسويق الرقمي، فإن We Think هنا لمساعدتك.',
    
    'creative AI digital solutions': 'حلول رقمية مبتكرة مدعومة بالذكاء الاصطناعي',

    'Our Mission': 'مهمتنا',
    'To provide innovative, reliable, and creative digital solutions that help businesses grow and succeed in today’s fast-moving world.':
      'تقديم حلول رقمية مبتكرة وموثوقة وإبداعية تساعد الشركات على النمو والنجاح في عالم اليوم السريع.',
    
    'Our Vision': 'رؤيتنا',
    'To become one of Saudi Arabia’s most trusted software and digital service companies—known for our quality, creativity, and client-first approach.':
      'أن نصبح واحدة من أكثر شركات البرمجيات والخدمات الرقمية موثوقية في السعودية—بفضل الجودة والإبداع ونهجنا القائم على العميل أولاً.',

    'Digital Transformation, Perfected': 'التحول الرقمي في أفضل صورة',
    'Crafting digital experiences that matter. We transform businesses and lives by creating innovative products that resonate with millions.':
      'نصمم تجارب رقمية ذات قيمة. نحن نحول الأعمال والحياة من خلال ابتكار منتجات مؤثرة تصل إلى الملايين.',

    'Estimate Project': 'تقدير المشروع',
    'Web Development': 'تطوير الويب',
    'Beautiful on the outside. Powerful under the hood.': 'جميل من الخارج. قوي من الداخل.',

    'Digital Marketing': 'التسويق الرقمي',
    'Right message, right people, right time—every time.': 'الرسالة الصحيحة، للأشخاص المناسبين، في الوقت المناسب—في كل مرة.',

    'Application & Software Development': 'تطوير التطبيقات والبرمجيات',
    'Smart apps. Real results. Built to grow with you.': 'تطبيقات ذكية. نتائج واقعية. مصممة للنمو معك.',

    'Content Creation': 'إنشاء المحتوى',
    'Words that work. Stories that stick.': 'كلمات فعّالة. قصص لا تُنسى.',

    'Search Engine Optimization (SEO)': 'تحسين محركات البحث (SEO)',
    'Be seen where it matters—at the top of the search.': 'كن مرئياً في الأماكن التي تهم—في أعلى نتائج البحث.',

    'Secret Sauce': 'السر الخاص بنا',
    'We go the extra mile for our clients, taking personal responsibility for our shared success.':
      'نذهب أبعد مما هو متوقع لعملائنا، ونتحمل المسؤولية الشخصية من أجل نجاحنا المشترك.',

    '💪 Commitment': '💪 الالتزام',
    'We pledge unwavering dedication, owning our commitments to clients and self with passion.':
      'نعد بالتفاني الكامل، ونتحمل مسؤولياتنا تجاه العملاء وأنفسنا بشغف.',

    '🛠️ Mastery in Tech': '🛠️ إتقان التكنولوجيا',
    'Our focus on Python, JS, TypeScript, and PHP has enabled us to refine our craft & deliver excellence.':
      'تركيزنا على Python وJS وTypeScript وPHP مكننا من صقل مهاراتنا وتقديم التميز.',

    '⚡ Faster Is Better': '⚡ السرعة ميزة',
    'A sprint-based approach means rapid delivery, letting you validate ideas quickly and iterate effectively.':
      'النهج القائم على السرعة يعني تسليمًا سريعًا، مما يسمح لك باختبار الأفكار بسرعة وتكرارها بفعالية.',

    '🌈 Transparency': '🌈 الشفافية',
    'We foster transparent collaborations, ensuring you see and control every phase of your project.':
      'نُشجع التعاون الشفاف، ونضمن لك الاطلاع الكامل على كل مرحلة من مشروعك والتحكم فيها.',

    '🔍 Discovery Spirit': '🔍 روح الاكتشاف',
    'With a proactive and inquisitive spirit, we experiment fearlessly, always offering viable alternatives to drive success.':
      'بروح استباقية واستكشافية، نجرب بلا خوف، ونقدم دائمًا بدائل قابلة للتنفيذ لتحقيق النجاح.',
'🎯 Product Thinking': '🎯 التفكير المنتج',
    'We don’t just code; we think critically about your business goals, ensuring the product fits your audience perfectly.':
      'نحن لا نبرمج فقط؛ بل نفكر بعناية في أهداف عملك، ونضمن أن المنتج يتناسب تمامًا مع جمهورك.',

    'Smart Innovation. Proven Delivery.': 'ابتكار ذكي. تنفيذ مثبت.',
    'For over 10 years, we’ve refined an agile, AI-driven process that transforms ideas into high-performing digital solutions—faster than ever.':
      'لأكثر من 10 سنوات، قمنا بتحسين عملية مرنة مدعومة بالذكاء الاصطناعي لتحويل الأفكار إلى حلول رقمية عالية الأداء—بشكل أسرع من أي وقت مضى.',

    '0': '٠',
    '+': '+',
    'projects delivered': 'مشاريع تم تسليمها',
    'satisfied clients': 'عملاء راضون',
    'Net Promoter Score (NPS)': 'مؤشر رضا العملاء (NPS)',
    "Delivered 300+ projects world-wide, with >95% business in North America.": "تم تنفيذ أكثر من 300 مشروع حول العالم، مع أكثر من 95٪ من الأعمال في أمريكا الشمالية.",


    'Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the': 
      'نغذي ابتكارات الغد — نساعد أصحاب الرؤية في التصميم والبناء والتوسع باستخدام',
    'Power of AI': 'قوة الذكاء الاصطناعي',

    'Facebook': 'فيسبوك',
    'Twitter': 'تويتر',
    'Instagram': 'إنستغرام',
    'Linkedin': 'لينكدإن',

    'CONTACT': 'اتصل بنا',
    'support@qodiy.com': 'support@qodiy.com',
    '+966 567-987-666': '+٩٦٦ ٥٦٧-٩٨٧-٦٦٦',
    'Riyadh, Saudi Arabia': 'الرياض، المملكة العربية السعودية',

    'COMPANY': 'الشركة',
    'Contact': 'اتصال',
    'SERVICES': 'الخدمات',
    'App Development Service': 'خدمة تطوير التطبيقات',
    'SEO': 'تحسين محركات البحث',

    'Web Development Service': 'خدمة تطوير الويب',
'App Development service': 'خدمة تطوير التطبيقات',
'Digital Marketing Service': 'خدمة التسويق الرقمي',
'Content Creation': 'إنشاء المحتوى',
'SEO service': 'خدمة تحسين محركات البحث',
'Work': 'العمل',
'Method': 'الطريقة',
'About': 'حول',
'Integration': 'التكامل',

    '© 2015-2025 Qodiy. All rights reserved.': '© ٢٠١٥-٢٠٢٥ كودي. جميع الحقوق محفوظة.',
    'Terms of use': 'شروط الاستخدام',
    'Privacy Policy': 'سياسة الخصوصية',
    'Sitemap': 'خريطة الموقع',
    'Code the Future. Build Beyond': 'برمج المستقبل. وابنِ ما هو أبعد',
    'Creative AI Digital Solutions': 'حلول الذكاء الاصطناعي الإبداعية',
// Method
  "Skip to content": "تخطي إلى المحتوى",
  "logo-b": "شعار ب",
  "Services": "الخدمات",
  "Work": "الأعمال",
  "Method": "المنهجية",
  "About": "من نحن",
  "Integration": "التكامل",
  "Get In Touch": "تواصل معنا",

  "cropped-favicon.png": "favicon-مقتص",
  "The Qodiy": "كودي",
  "Imagine More. Build Better. Rise Higher.": "تخيل المزيد. ابنِ أفضل. ارتقِ أعلى.",
  "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the power of AI.":
    "نغذي ابتكارات الغد — نساعد المبدعين في التصميم، والبناء، والتوسع باستخدام قوة الذكاء الاصطناعي.",
  "Qodiy is a next-gen software house blending artificial intelligence, custom development, and smart design to build scalable, intelligent, and human-centered digital products.":
    "كودي هي شركة برمجيات من الجيل القادم تمزج بين الذكاء الاصطناعي، والتطوير المخصص، والتصميم الذكي لبناء منتجات رقمية ذكية وقابلة للتوسع تركز على المستخدم.",

  "Imagine More.": "تخيل المزيد.",
  "Unlock the power of limitless creativity. At the heart of every great idea is imagination—think bigger, go further, and bring bold visions to life.":
    "افتح آفاق الإبداع غير المحدود. في قلب كل فكرة عظيمة توجد الخيال—فكر أكبر، وتقدم أكثر، وحقق رؤى جريئة إلى الحياة.",

  "Share Your Requirements": "شارك متطلباتك",
  "Fill out the contact form, and our expert consultants will connect with you on priority.":
    "املأ نموذج التواصل وسيتواصل معك مستشارونا الخبراء بأولوية.",

  "Sign An NDA": "توقيع اتفاقية عدم الإفصاح (NDA)",
  "We build the foundation of a trustful partnership by signing an NDA before the introductory call or finalizing the service agreement.":
    "نبني أساس شراكة قائمة على الثقة من خلال توقيع اتفاقية عدم الإفصاح قبل المكالمة التمهيدية أو توقيع الاتفاقية النهائية.",

  "Consult Over Call": "استشارة عبر الهاتف",
  "Our dedicated experts connect over call, dive into your situation, and detect value-creation opportunities you can leverage.":
    "يتواصل خبراؤنا المخصصون معك عبر الهاتف، ويتعمقون في حالتك، ويكتشفون فرصًا يمكن استغلالها لتحقيق القيمة.",

  "Requirement Gathering": "جمع المتطلبات",
  "Through focused interactions, we gain a comprehensive understanding of your project requirements.":
    "من خلال تفاعلات مركزة، نحصل على فهم شامل لمتطلبات مشروعك.",

  "Solution Proposal": "اقتراح الحل",
  "We send you a proposal outlining the scope of work, cost estimates, project timelines, and other critical details.":
    "نرسل لك اقتراحًا يوضح نطاق العمل، وتقديرات التكلفة، والجداول الزمنية، وغيرها من التفاصيل المهمة.",

  "Sign The Contract": "توقيع العقد",
  "Sign the contract per mutually agreed terms and kick off the project.":
    "وقع العقد حسب الشروط المتفق عليها وابدأ المشروع.",

  "Strategic Planning": "التخطيط الاستراتيجي",
  "We create a detailed roadmap with milestones, timelines, and flexible pricing structures.":
    "ننشئ خارطة طريق مفصلة مع مراحل، وجداول زمنية، وهياكل تسعير مرنة.",

  "Build Better.": "ابنِ أفضل.",
  "We bring your vision to life through iterative development and continuous refinement.":
    "نحول رؤيتك إلى واقع من خلال التطوير التدريجي والتحسين المستمر.",

  "Assemble Your Team": "تجميع فريقك",
  "We bring together a team of talented project managers, designers, engineers, and other specialists based on the specific needs of your project.":
    "نجمع فريقًا من مديري المشاريع والمصممين والمهندسين وغيرهم من المتخصصين بناءً على احتياجات مشروعك.",

  "Design Thinking": "تفكير التصميم",
  "We create wireframes and user stories to visualize the solution.":
    "نقوم بإنشاء نماذج تخطيطية وقصص مستخدم لتصور الحل.",

  "Interactive Prototypes": "نماذج تفاعلية",
  "We create interactive prototypes that selected end-users from your target audience can interact with, providing feedback that we use to make improvements on the go.":
    "نصمم نماذج تفاعلية يمكن للمستخدمين النهائيين المستهدفين التفاعل معها، مما يوفر لنا ملاحظات لتحسين المنتج أثناء التنفيذ.",

  "UI/UX Design": "تصميم واجهة وتجربة المستخدم",
  "Our team, passionate about high-end aesthetics, adds visual polish to your product with dynamic colors, fonts, icons, and seamless navigation.":
    "فريقنا الشغوف بالجماليات يضيف لمسة مرئية رائعة لمنتجك باستخدام ألوان وخطوط وأيقونات ديناميكية وتصفح سلس.",

  "Agile Development": "التطوير الرشيق",
  "We employ sprint-based development for rapid, continuous delivery and feedback.":
    "نستخدم تطويرًا قائمًا على السبرينت لضمان تسليم سريع ومستمر مع ملاحظات دورية.",

  "Quality Assurance": "ضمان الجودة",
  "Rigorous testing at every stage guarantees a high-quality product.":
    "الاختبار الدقيق في كل مرحلة يضمن منتجًا عالي الجودة.",

  "Rise Higher.": "ارتقِ أعلى.",
  "Launch with Confidence": "الإطلاق بثقة",
  "We ensure smooth deployment across all required platforms.":
    "نضمن نشرًا سلسًا عبر جميع المنصات المطلوبة.",

  "Performance Monitoring": "مراقبة الأداء",
  "We track technical performance and user behavior to inform future enhancements.":
    "نراقب الأداء الفني وسلوك المستخدم لتحديد التحسينات المستقبلية.",

  "Continuous Iteration": "تكرار مستمر",
  "We implement regular updates and new features to keep your solution at the cutting edge.":
    "ننفذ تحديثات منتظمة وميزات جديدة لإبقاء الحل الخاص بك في طليعة التكنولوجيا.",

  "Choose Your Ideal Working Model": "اختر نموذج العمل المثالي",
  "Select the perfect working model for your project, whether you need a dedicated team or flexible on-demand support.":
    "اختر نموذج العمل المثالي لمشروعك، سواء كنت بحاجة إلى فريق مخصص أو دعم مرن حسب الطلب.",

  "Dedicated Team": "فريق مخصص",
  "Build Your Vision with a Committed Team": "حقق رؤيتك مع فريق ملتزم",
  "For fixed-scope, time-bound projects, our dedicated team works solely on your MVP or existing product, ensuring top-notch results.":
    "بالنسبة للمشاريع ذات النطاق المحدد والمدة الزمنية المحددة، يعمل فريقنا المخصص حصريًا على منتجك لضمان أفضل النتائج.",

  "💼 Full commitment to your project": "💼 التزام كامل بمشروعك",
  "📅 Ideal for fixed-scope, time-bound projects": "📅 مثالي للمشاريع محددة المدة والنطاق",
  "🔧 Comprehensive development and support": "🔧 تطوير ودعم شامل",
  "📈 Aligned with your company’s vision and goals": "📈 متوافق مع رؤية وأهداف شركتك",

  "Get Started Today": "ابدأ اليوم",
  "Ready to take your project to the next level? Let's find the ideal working model for you.":
    "هل أنت مستعد للارتقاء بمشروعك؟ دعنا نساعدك في اختيار النموذج الأنسب لك.",

  "On-Demand Team": "فريق عند الطلب",
  "Flexibility When You Need It": "المرونة عند الحاجة",
  "Scale your project with our on-demand team, selecting the exact number of experts needed for continuous development and maintenance.":
    "قم بتوسيع مشروعك مع فريقنا عند الطلب، من خلال اختيار عدد الخبراء المناسبين للتطوير والصيانة المستمرة.",

  "🚀 Pay-as-you-go flexibility": "🚀 مرونة الدفع حسب الاستخدام",
  "🔄 Ideal for ongoing maintenance and feature development": "🔄 مثالي للصيانة المستمرة وتطوير الميزات",
  "🔍 Access to A-grade professionals on demand": "🔍 الوصول إلى خبراء من الدرجة الأولى عند الطلب",
  "🔧 Scalable resources as your project evolves": "🔧 موارد قابلة للتوسع مع تطور مشروعك",

  "Smart Innovation. Proven Delivery.": "ابتكار ذكي. نتائج مثبتة.",
  "For over 10 years, we’ve refined an agile, AI-driven process that transforms ideas into high-performing digital solutions—faster than ever.":
    "على مدار أكثر من 10 سنوات، قمنا بتطوير عملية رشيقة مدعومة بالذكاء الاصطناعي لتحويل الأفكار إلى حلول رقمية عالية الأداء — وبسرعة غير مسبوقة.",

  "projects delivered": "مشاريع تم تسليمها",
  "satisfied clients": "عملاء راضون",
  "Net Promoter Score (NPS)": "مؤشر رضا العملاء (NPS)",

  "Our Advanced Technology Stack": "مكدسنا التكنولوجي المتقدم",
  "Dive into the foundation of our tech solutions — every component in our toolkit is handpicked to deliver reliable, scalable, and innovative digital experiences.":
    "تعرف على أساس حلولنا التقنية — كل أداة مختارة بعناية لتقديم تجارب رقمية موثوقة وقابلة للتوسع ومبتكرة.",

  "Large Language Models (LLMs)": "نماذج اللغة الكبيرة (LLMs)",
  "Language Models That Understand": "نماذج لغوية تفهم",
  "ML & Deep Learning Frameworks & Libraries": "أطر ومكتبات تعلم الآلة والتعلم العميق",
  "Building Blocks for Intelligent Systems": "لبنات بناء للأنظمة الذكية",
  "Backend Technologies": "تقنيات الخلفية",
  "The Powerhouse Behind the Scenes": "القوة المحركة خلف الكواليس",
  "Frontend Technologies": "تقنيات الواجهة الأمامية",
  "The Face of Innovation": "واجهة الابتكار",
  "Databases": "قواعد البيانات",
  "The Memory Banks of Your Digital Empire": "مخازن ذاكرة إمبراطوريتك الرقمية",
  "Testing": "الاختبار",
  "Ensuring Digital Excellence": "ضمان التميز الرقمي",
  "Cloud Services": "خدمات السحابة",
  "Your Skyward Expansion": "توسعك نحو السماء",
  "DevOps Services": "خدمات ديف أوبس",
  "The Rhythm of Continuous Improvement": "إيقاع التحسين المستمر",

  "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the": 
    "ندعم ابتكارات المستقبل — نساعد المبدعين على التصميم والبناء والتوسع باستخدام",
  "Power of AI": "قوة الذكاء الاصطناعي",

  "Facebook": "فيسبوك",
  "Twitter": "تويتر",
  "Instagram": "إنستغرام",
  "Linkedin": "لينكدإن",
  "CONTACT": "اتصل بنا",
  "support@qodiy.com": "support@qodiy.com",
  "+966 567-987-666": "+966 567-987-666",
  "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",

  "COMPANY": "الشركة",
  "Contact": "تواصل",

  "Web Development Service": "خدمة تطوير المواقع",
  "App Development Service": "خدمة تطوير التطبيقات",
  "Digital Marketing": "التسويق الرقمي",
  "Content Creation": "إنشاء المحتوى",
  "SEO": "تحسين محركات البحث",

  "Terms of use": "شروط الاستخدام",
  "Privacy Policy": "سياسة الخصوصية",
  "Sitemap": "خريطة الموقع",
  "Code the Future. Build Beyond": "برمج المستقبل. ابنِ لما هو أبعد.",
          'Skip to content': 'تخطي إلى المحتوى',
        'logo-b': 'الشعار-ب',
        'Services': 'الخدمات',
        'Work': 'العمل',
        'Method': 'الطريقة',
        'About': 'حول',
        'Integration': 'التكامل',
        'Get In Touch': 'تواصل معنا',

        'API integration connects different software systems, allowing them to share data and functionality seamlessly.':
            'تكامل واجهة برمجة التطبيقات يربط بين الأنظمة البرمجية المختلفة، مما يسمح لها بمشاركة البيانات والوظائف بسلاسة.',

        'Nafath Integration': 'تكامل نفاذ',
        'Nafath Integration enables secure user authentication by connecting your system with Saudi Arabia’s national digital identity platform, allowing users to log in using their Absher credentials.':
            'يتيح تكامل نفاذ المصادقة الآمنة للمستخدمين عن طريق ربط نظامك بمنصة الهوية الرقمية الوطنية في السعودية، مما يسمح للمستخدمين بتسجيل الدخول باستخدام بيانات أبشر الخاصة بهم.',

        'Odoo Integration': 'تكامل أودو',
        'Odoo Integration connects your existing systems with the Odoo ERP platform, streamlining operations like sales, inventory, accounting, and CRM into one unified solution.':
            'يربط تكامل أودو أنظمتك الحالية بمنصة Odoo ERP، مما يسهل العمليات مثل المبيعات والمخزون والمحاسبة وإدارة علاقات العملاء في حل موحد.',

        'Freshbooks Integration': 'تكامل فريش بوكس',
        'FreshBooks Integration connects your system with the FreshBooks accounting platform, enabling automated invoicing, expense tracking, time logging, and financial reporting for streamlined business management.':
            'يربط تكامل فريش بوكس نظامك بمنصة المحاسبة FreshBooks، مما يتيح إنشاء الفواتير تلقائيًا، وتتبع النفقات، وتسجيل الوقت، والتقارير المالية لإدارة أعمال أكثر سلاسة.',

        'QuickBooks Integration': 'تكامل كويك بوكس',
        'QuickBooks Integration connects your system with QuickBooks accounting software, enabling seamless syncing of invoices, expenses, payments, and financial data for efficient bookkeeping and real-time financial management.':
            'يربط تكامل كويك بوكس نظامك ببرنامج المحاسبة QuickBooks، مما يتيح مزامنة الفواتير والنفقات والمدفوعات والبيانات المالية بسهولة لإدارة مالية فعّالة وفي الوقت الفعلي.',

        'ZATCA Integration': 'تكامل الزكاة والضريبة والجمارك',
        'ZATCA Integration connects your system with the Saudi Zakat, Tax and Customs Authority to enable real-time e-invoicing, tax compliance, and automated reporting in line with local regulations.':
            'يربط تكامل الزكاة والضريبة والجمارك نظامك بهيئة الزكاة والضريبة والجمارك السعودية لتمكين الفوترة الإلكترونية الفورية، والامتثال الضريبي، والتقارير التلقائية وفقًا للوائح المحلية.',

        'Salla Integration': 'تكامل سلة',
        'Salla Integration connects your website or system with the Salla eCommerce platform, enabling seamless product management, order syncing, and real-time inventory updates for smoother online store operations.':
            'يربط تكامل سلة موقعك أو نظامك بمنصة التجارة الإلكترونية سلة، مما يتيح إدارة المنتجات، ومزامنة الطلبات، وتحديثات المخزون في الوقت الحقيقي بسلاسة لعمليات متجر إلكتروني أكثر سلاسة.',

        'Qoyod Integration': 'تكامل قيود',
        'Qoyod Integration connects your system with the Qoyod cloud accounting software, enabling automated invoicing, expense tracking, VAT compliance, and real-time financial reporting tailored for Saudi businesses.':
            'يربط تكامل قيود نظامك ببرنامج قيود المحاسبي السحابي، مما يتيح إنشاء الفواتير تلقائيًا، وتتبع النفقات، والامتثال لضريبة القيمة المضافة، والتقارير المالية الفورية المصممة للأعمال السعودية.',

        'SAP Integration': 'تكامل SAP',
        'SAP Integration connects your systems with SAP’s enterprise resource planning (ERP) solutions, enabling real-time data exchange, automated workflows, and streamlined business operations across finance, HR, supply chain, and more.':
            'يربط تكامل SAP أنظمتك بحلول تخطيط موارد المؤسسات (ERP) من SAP، مما يتيح تبادل البيانات في الوقت الفعلي، وسير العمل التلقائي، وتبسيط العمليات التجارية في المالية والموارد البشرية وسلسلة التوريد والمزيد.',

        'Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the': 
            'نغذي ابتكارات الغد — نساعد أصحاب الرؤية على التصميم والبناء والتوسع باستخدام',
        'Power of AI': 'قوة الذكاء الاصطناعي',

        'Facebook': 'فيسبوك',
        'Twitter': 'تويتر',
        'Instagram': 'إنستغرام',
        'Linkedin': 'لينكد إن',
        'CONTACT': 'اتصل بنا',
        'support@qodiy.com': 'support@qodiy.com',
        '+966 567-987-666': '+966 567-987-666',
        'Riyadh, Saudi Arabia': 'الرياض، المملكة العربية السعودية',

        'COMPANY': 'الشركة',
        'Contact': 'اتصل',
        'SERVICES': 'الخدمات',
        'Web Development Service': 'خدمة تطوير الويب',
        'App Development Service': 'خدمة تطوير التطبيقات',
        'Digital Marketing': 'التسويق الرقمي',
        'Content Creation': 'إنشاء المحتوى',
        'SEO': 'تحسين محركات البحث',

        '© 2015-2025 Qodiy. All rights reserved.': '© 2015-2025 كودي. جميع الحقوق محفوظة.',
        'Terms of use': 'شروط الاستخدام',
        'Privacy Policy': 'سياسة الخصوصية',
        'Sitemap': 'خريطة الموقع',
        'Code the Future. Build Beyond': 'برمج المستقبل. وابنِ ما هو أبعد.',

        // Get Touch
            'Skip to content': 'تخطي إلى المحتوى',
    'logo-b': 'الشعار-ب',
    'Services': 'الخدمات',
    'Work': 'العمل',
    'Method': 'الطريقة',
    'About': 'حول',
    'Integration': 'التكامل',
    'Get In Touch': 'تواصل معنا',

    'Let’s Build Together': 'دعنا نبني معًا',
    'We’ll review your project details and set up a free consultation to discuss your needs and provide an estimate.':
      'سنراجع تفاصيل مشروعك ونحدد موعدًا لاستشارة مجانية لمناقشة احتياجاتك وتقديم تقدير.',

    'Project Kickoff Process': 'عملية بدء المشروع',
    'A Clear Path to Success': 'طريق واضح للنجاح',
    'Our streamlined process takes your concept from initial submission to project kickoff, ensuring a clear path to bringing your app vision to life.':
      'تأخذك عمليتنا المبسطة من تقديم فكرتك إلى بدء المشروع، مما يضمن طريقًا واضحًا لتحقيق رؤيتك للتطبيق.',

    '💡Submit your idea': '💡قدّم فكرتك',
    '🧠We review and brainstorm': '🧠نراجع ونبتكر الأفكار',
    '☎️Free consultation call': '☎️مكالمة استشارية مجانية',
    '📋Tailored proposal': '📋عرض مخصص',
    '⚙️Project kickoff': '⚙️بدء المشروع',

    'If you want to offer your services or solutions, please follow this link.':
      'إذا كنت ترغب في تقديم خدماتك أو حلولك، يرجى اتباع هذا الرابط.',

    'First Name': 'الاسم الأول',
    'Enter Your First Name': 'أدخل اسمك الأول',
    'Company Name': 'اسم الشركة',
    'Email Address': 'البريد الإلكتروني',
    'Phone Number': 'رقم الهاتف',
    'Tell us more about your project': 'أخبرنا المزيد عن مشروعك',

    'I have read and agree to the Terms and Conditions and Privacy Policy':
      'لقد قرأت وأوافق على الشروط والأحكام وسياسة الخصوصية',

    'Facebook': 'فيسبوك',
    'Twitter': 'تويتر',
    'Instagram': 'إنستغرام',
    'Linkedin': 'لينكدإن',

    'CONTACT': 'اتصل بنا',
    'support@qodiy.com': 'support@qodiy.com',
    '+966 567-987-666': '+٩٦٦ ٥٦٧-٩٨٧-٦٦٦',
    'Riyadh, Saudi Arabia': 'الرياض، المملكة العربية السعودية',

    'COMPANY': 'الشركة',
    'Contact': 'اتصال',
    'SERVICES': 'الخدمات',
    'Web Development Service': 'خدمة تطوير الويب',
    'App Development Service': 'خدمة تطوير التطبيقات',
    'Digital Marketing': 'التسويق الرقمي',
    'Content Creation': 'إنشاء المحتوى',
    'SEO': 'تحسين محركات البحث',

    '© 2015-2025 Qodiy. All rights reserved.': '© ٢٠١٥-٢٠٢٥ كودي. جميع الحقوق محفوظة.',
    'Terms of use': 'شروط الاستخدام',
    'Privacy Policy': 'سياسة الخصوصية',
    'Sitemap': 'خريطة الموقع',
    'Code the Future. Build Beyond': 'برمج المستقبل. وابنِ ما هو أبعد.',
    'Scroll to Top': 'الرجوع للأعلى',
    'If you want to offer your services or solutions, please follow': 'إذا كنت ترغب في تقديم خدماتك أو حلولك، يُرجى المتابعة',
    'Submit': 'إرسال',
     


    'Web Development Service': 'خدمة تطوير الويب',
    'App Development Service': 'خدمة تطوير التطبيقات',
    'Digital Marketing Service': 'خدمة التسويق الرقمي',
    'Content Creation': 'إنشاء المحتوى',
    'SEO Service': 'تحسين محركات البحث',
    'Website': 'موقع إلكتروني',
    'Development': 'تطوير',
"At We Think, we don’t just build websites—we build online foundations that support your growth from day one. Every website we create is designed with purpose, combining function and form to deliver a seamless user journey. When someone visits your site, it should be clear, intuitive, and engaging.": 
    "في نحن نفكر، نحن لا نبني مواقع إلكترونية فقط — بل نبني أساسات رقمية تدعم نموك منذ اليوم الأول. كل موقع نقوم بإنشائه مصمم بهدف، يجمع بين الوظيفة والشكل لتقديم تجربة مستخدم سلسة. عندما يزور أحدهم موقعك، يجب أن يكون واضحًا، بديهيًا، وجذابًا.",
     "That's why we prioritize speed, clean layout, and strong messaging.": "لهذا نُعطي الأولوية للسرعة، والتصميم النظيف، والرسائل القوية.",
"We plan every structure to scale with your business, not restrict it. Whether introducing a brand, sharing services, or building a platform for client interaction, your site becomes a hub for connection and clarity.": "نحن نخطط لكل هيكل ليتوسع مع عملك، لا أن يقيّده. سواء كنت تطلق علامة تجارية، أو تشارك خدمات، أو تبني منصة للتفاعل مع العملاء، فإن موقعك يصبح مركزًا للوضوح والتواصل.",
    
    "Our team works closely with you to ensure the final product fits your brand, speaks to your audience, and performs smoothly across all devices. The result? A website that isn’t just live—it’s working, moving, and helping you grow. At We Think, every line of code supports your long-term vision, not just today’s clicks.": 
    "يعمل فريقنا معك عن كثب لضمان أن المنتج النهائي يتماشى مع علامتك التجارية، ويتحدث إلى جمهورك، ويؤدي بسلاسة عبر جميع الأجهزة. والنتيجة؟ موقع إلكتروني لا يعمل فقط — بل يتحرك، ويعمل، ويساعدك على النمو. في نحن نفكر، يدعم كل سطر برمجي رؤيتك طويلة المدى، وليس فقط نقرات اليوم.",


    // Work
  "Skip to content": "تخطي إلى المحتوى",
  "logo-b": "شعار ب",
  "Services": "الخدمات",
  "Work": "الأعمال",
  "Method": "المنهجية",
  "About": "من نحن",
  "Integration": "التكامل",
  "Get In Touch": "تواصل معنا",

  "Next-Gen AI Masterpieces": "روائع الذكاء الاصطناعي من الجيل القادم",
  "Where AI Meets Imagination": "حيث يلتقي الذكاء الاصطناعي بالإبداع",
  "Explore the impactful projects that have revolutionized sectors and brought joy to users around the world.":
    "اكتشف المشاريع المؤثرة التي أحدثت ثورة في مختلف القطاعات وجلبت السعادة للمستخدمين حول العالم.",

  "Innovation for Every Business": "الابتكار لكل نوع من الأعمال",
  "We collaborate with businesses of all sizes to turn their ideas into smart digital solutions.":
    "نتعاون مع الشركات من جميع الأحجام لتحويل أفكارهم إلى حلول رقمية ذكية.",

  // "Simplifying DOT Compliance": "تبسيط التوافق مع DOT",
  "Loyalty program": "برنامج الولاء",
  "We Think partnered with a fast-growing rewards and discounts platform to design and develop a complete loyalty program for their brand.":
    "تعاونت We Think مع منصة مكافآت وخصومات سريعة النمو لتصميم وتطوير برنامج ولاء كامل لعلامتهم التجارية.",

  "eCommerce marketplace": "سوق إلكتروني",
  "We Think developed a full-featured eCommerce marketplace platform for clients seeking a system similar to Amazon or Daraz.":
    "طورت We Think منصة تجارة إلكترونية متكاملة لعملاء يبحثون عن نظام مشابه لأمازون أو داراز.",

  "Real Estate Sign": "لافتات العقارات",
  "We Think partnered with a U.S.-based real estate signage company to build a complete digital solution for managing sign installation requests.":
    "تعاونت We Think مع شركة أميركية مختصة في لافتات العقارات لبناء حل رقمي متكامل لإدارة طلبات تركيب اللافتات.",

  "Education Platform": "منصة تعليمية",
  "We Think partnered with a private school to build a complete education management platform that supports digital learning, communication, and operations.":
    "تعاونت We Think مع مدرسة خاصة لبناء منصة متكاملة لإدارة التعليم تدعم التعلم الرقمي، والتواصل، والعمليات اليومية.",

  "Inspired? Let's create something extraordinary together.": "هل ألهمتك هذه المشاريع؟ دعنا نبتكر شيئاً استثنائياً معاً.",
  "Estimate Project": "احسب تكلفة المشروع",

  "Android Apps": "تطبيقات أندرويد",
  "AI": "الذكاء الاصطناعي",
  "Web Apps": "تطبيقات الويب",
  "UI Design": "تصميم واجهة المستخدم",
  "DevOps": "ديف أوبس",
  "Process Automation": "أتمتة العمليات",
  "IoT": "إنترنت الأشياء",
  "iOS Apps": "تطبيقات iOS",
  "Business Process Redesign": "إعادة تصميم العمليات التجارية",
  "Mobile Apps": "تطبيقات الهاتف المحمول",
  "UX Design": "تصميم تجربة المستخدم",

  "Smart Innovation. Proven Delivery.": "ابتكار ذكي. تسليم موثوق.",
  "For over 10 years, we’ve refined an agile, AI-driven process that transforms ideas into high-performing digital solutions—faster than ever.":
    "على مدار أكثر من 10 سنوات، قمنا بصقل عملية مرنة مدفوعة بالذكاء الاصطناعي لتحويل الأفكار إلى حلول رقمية عالية الأداء — بسرعة غير مسبوقة.",

  "projects delivered": "مشاريع تم تسليمها",
  "satisfied clients": "عملاء راضون",
  "Net Promoter Score (NPS)": "مؤشر رضا العملاء (NPS)",

  "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the":
    "ندعم ابتكارات الغد — نساعد المبدعين على التصميم، والبناء، والتوسع باستخدام",
  "Power of AI": "قوة الذكاء الاصطناعي",

  "Facebook": "فيسبوك",
  "Twitter": "تويتر",
  "Instagram": "إنستغرام",
  "Linkedin": "لينكدإن",

  "CONTACT": "اتصل بنا",
  "support@qodiy.com": "support@qodiy.com",
  "+966 567-987-666": "+966 567-987-666",
  "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",

  "COMPANY": "الشركة",
  "Contact": "اتصل بنا",

  "Web Development Service": "خدمة تطوير المواقع",
  "App Development Service": "خدمة تطوير التطبيقات",
  "Digital Marketing": "التسويق الرقمي",
  "Content Creation": "إنشاء المحتوى",
  "SEO": "تحسين محركات البحث",

  "Terms of use": "شروط الاستخدام",
  "Privacy Policy": "سياسة الخصوصية",
  "Sitemap": "خريطة الموقع",
  "Code the Future. Build Beyond": "برمج المستقبل. وابنِ لما هو أبعد.",

// Web Development

    'Skip to content': 'تخطي إلى المحتوى',
    'Services': 'الخدمات',
    'Work': 'الأعمال',
    'Method': 'المنهجية',
    'About': 'حول',
    'Integration': 'التكامل',
    'Get In Touch': 'تواصل معنا',
    'Website': 'الموقع الإلكتروني',
    'Development': 'التطوير',
    "At We Think, we don’t just build websites—we build online foundations that support your growth from day one.": 'في وي ثينك، لا نقوم فقط ببناء مواقع إلكترونية - بل نبني أساسات رقمية تدعم نموك منذ اليوم الأول.',
    "Every website we create is designed with purpose, combining function and form to deliver a seamless user journey.": 'كل موقع نقوم بإنشائه مصمم بهدف، حيث يجمع بين الوظيفة والشكل لتقديم تجربة مستخدم سلسة.',
    "When someone visits your site, it should be clear, intuitive, and engaging.": 'عند زيارة أحدهم لموقعك، يجب أن يكون واضحاً وبديهياً وجذاباً.',
    "That's why we prioritize speed, clean layout, and strong messaging.": 'لهذا السبب نُعطي الأولوية للسرعة والتصميم النظيف والرسائل القوية.',
    "More than a website. A digital foundation.": 'أكثر من مجرد موقع. إنها بنية رقمية.',
    "We plan every structure to scale with your business, not restrict it.": 'نُخطط لكل بنية لتتوسع مع عملك، لا لتقيده.',
    "Whether introducing a brand, sharing services, or building a platform for client interaction, your site becomes a hub for connection and clarity.": 'سواءً كنت تقدم علامة تجارية، أو تعرض خدمات، أو تبني منصة للتفاعل مع العملاء، يصبح موقعك مركزاً للتواصل والوضوح.',
    "Our team works closely with you to ensure the final product fits your brand, speaks to your audience, and performs smoothly across all devices.": 'يعمل فريقنا معك عن كثب لضمان أن المنتج النهائي يتماشى مع علامتك التجارية ويتحدث لجمهورك ويعمل بسلاسة على جميع الأجهزة.',
    "The result? A website that isn’t just live—it’s working, moving, and helping you grow.": 'والنتيجة؟ موقع لا يعمل فقط بل ينمو ويتطور ويساعدك على التوسع.',
    "At We Think, every line of code supports your long-term vision, not just today’s clicks.": 'في وي ثينك، كل سطر من الكود يدعم رؤيتك طويلة المدى، وليس فقط نقرات اليوم.',
    "Full-Scale Web Development Services": 'خدمات تطوير الويب الشاملة',
    "Want to streamline your operations, enhance customer engagement, or bring a new product to life? Qodiy has you covered.": 'هل ترغب في تبسيط عملياتك، وتعزيز تفاعل العملاء، أو إطلاق منتج جديد؟ كودي هنا من أجلك.',
    "Our full-spectrum web development services are tailored to your business goals—flexible, scalable, and crafted to drive results.": 'خدمات تطوير الويب المتكاملة لدينا مصممة خصيصاً لأهداف عملك — مرنة، وقابلة للتوسع، ومصممة لتحقيق النتائج.',
    "Custom Website Development": 'تطوير مواقع مخصصة',
    "At We Think, we build fully custom websites from the ground up—tailored to your unique goals, style, and operations, with smart, scalable solutions.": 'في وي ثينك، نقوم ببناء مواقع مخصصة بالكامل من البداية — مصممة خصيصاً لأهدافك وأسلوبك وعملياتك، مع حلول ذكية قابلة للتوسع.',
    "PHP Web Development": 'تطوير ويب باستخدام PHP',
    "At We Think, we use PHP to build stable, secure, and dynamic systems with clean, scalable code that powers your platform smartly and seamlessly behind the scenes.": 'في وي ثينك، نستخدم PHP لبناء أنظمة مستقرة وآمنة وديناميكية مع كود نظيف وقابل للتوسع يدير منصتك بذكاء وسلاسة خلف الكواليس.',
    "WordPress Development": 'تطوير ووردبريس',
    "Key Pillars for Development Success": 'الركائز الأساسية لنجاح التطوير',
    "Speed and Responsiveness": 'السرعة والاستجابة',
    "Enjoy lightning-fast loading times and smooth navigation. Our apps are optimized for performance, keeping users engaged and frustration-free.": 'استمتع بأوقات تحميل فائقة السرعة وتنقل سلس. تطبيقاتنا مُحسنة للأداء وتُبقي المستخدمين متفاعلين بدون إحباط.',
    "Cross-Platform Compatibility": 'التوافق عبر المنصات',
    "Our cross-platform app development expertise allows us to build high-performing apps for both iOS and Android.": 'خبرتنا في تطوير التطبيقات متعددة المنصات تتيح لنا بناء تطبيقات عالية الأداء لكل من iOS و Android.',
    "Data Security and Privacy": 'أمان وخصوصية البيانات',
    "We employ robust encryption and protection measures to protect your app from data breaches and potential cyber threats.": 'نستخدم تشفيراً قوياً وتدابير حماية لحماية تطبيقك من انتهاكات البيانات والتهديدات الإلكترونية المحتملة.',
    "Scalability": 'القابلية للتوسع',
    "Implementing scalable architecture within your mobile app project helps you handle increasing user loads without compromising speed.": 'تطبيق بنية قابلة للتوسع في مشروع تطبيقك يساعدك على التعامل مع زيادات عدد المستخدمين دون التضحية بالسرعة.',
    "User-Centric Design": 'تصميم يركز على المستخدم',
    "We design intuitive, engaging interfaces with a user-centric approach to ensure maximum user satisfaction and higher app adoption rates.": 'نصمم واجهات بديهية وجذابة باستخدام نهج يركز على المستخدم لضمان أعلى درجات الرضا وزيادة معدل استخدام التطبيق.',
    "Strategies, Impactful Results": 'استراتيجيات ونتائج مؤثرة',
    "projects delivered": 'المشاريع المُنفذة',
    "satisfied clients": 'العملاء الراضون',
    "Net Promoter Score (NPS)": 'مؤشر صافي الترويج',
    "Web Applications for Every Business": 'تطبيقات الويب لكل نوع من الأعمال',
    "Early-Stage Startups": 'الشركات الناشئة في مراحلها الأولى',
    "Accelerate growth with our cost-effective Web app. Validate your business model and reach your target market.": 'سرّع النمو باستخدام تطبيق ويب فعال من حيث التكلفة. قم بالتحقق من نموذج عملك والوصول إلى السوق المستهدف.',
    "Established Enterprises": 'المؤسسات القائمة',
    "Transform your business with enterprise-grade Web solutions. Improve operational efficiency and gain a competitive edge.": 'حوّل أعمالك باستخدام حلول ويب على مستوى المؤسسات. حسّن الكفاءة التشغيلية واكتسب ميزة تنافسية.',
    "Growth-Stage Companies": 'شركات في مرحلة النمو',
    "Scale your operations efficiently with our scalable Web platforms. Enhance customer experience and drive revenue.": 'وسّع عملياتك بكفاءة باستخدام منصات الويب القابلة للتوسع لدينا. حسّن تجربة العملاء وزد الإيرادات.',
    "Independent Software Vendors (ISVs)": 'البائعون المستقلون للبرمجيات',
    "Leverage our expertise to build and launch your Web product. Focus on innovation while our skilled web developers handle the technicalities.": 'استفد من خبرتنا لبناء وإطلاق منتج الويب الخاص بك. ركّز على الابتكار بينما يتولى مطورو الويب لدينا الأمور التقنية.',
    "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the": 'نُشعل ابتكارات الغد — نساعد أصحاب الرؤية على التصميم والبناء والتوسع باستخدام',
    "Power of AI": 'قوة الذكاء الاصطناعي',
    "Facebook": 'فيسبوك',
    "Twitter": 'تويتر',
    "Instagram": 'إنستغرام',
    "Linkedin": 'لينكدإن',
    "CONTACT": 'اتصل بنا',
    "support@qodiy.com": 'support@qodiy.com',
    "Riyadh, Saudi Arabia": 'الرياض، المملكة العربية السعودية',
    "COMPANY": 'الشركة',
    "Contact": 'اتصال',
    "Web Development Service": 'خدمة تطوير الويب',
    "App Development Service": 'خدمة تطوير التطبيقات',
    "Digital Marketing": 'التسويق الرقمي',
    "Content Creation": 'إنشاء المحتوى',
    "SEO": 'تحسين محركات البحث',
    "Terms of use": 'شروط الاستخدام',
    "Privacy Policy": 'سياسة الخصوصية',
    "Sitemap": 'خريطة الموقع',
    "Code the Future. Build Beyond": 'برمج المستقبل. وابنِ لما هو أبعد.',
    "Scroll to Top": 'العودة إلى الأعلى',

// Application & Software Development

    "Skip to content": "تخطي إلى المحتوى",
    "Services": "الخدمات",
    "Work": "الأعمال",
    "Method": "المنهجية",
    "About": "حول",
    "Integration": "التكامل",
    "Get In Touch": "تواصل معنا",
    "Application & Software Development": "تطوير التطبيقات والبرمجيات",
    "At We Think, we turn real problems into smart digital products. Based in Saudi Arabia, we craft custom software and applications that don’t just run—they move businesses forward.":
      "في وي ثينك، نحول المشكلات الحقيقية إلى منتجات رقمية ذكية. من مقرنا في السعودية، نُصمم برمجيات وتطبيقات مخصصة لا تعمل فقط، بل تدفع الأعمال إلى الأمام.",
    "At We Think, we don't follow trends—we build tools that stand the test of time.":
      "في وي ثينك، لا نتبع الصيحات — بل نُنشئ أدوات تدوم طويلاً.",
    "Ideas built to perform.": "أفكار مصممة للأداء.",
    "Every line of code we write has a purpose: to make life easier, faster, and more connected.":
      "كل سطر من الكود نكتبه له هدف: تسهيل الحياة، وتسريعها، وجعلها أكثر ترابطًا.",
    "Our focus is on clarity, speed, and function. Whether it’s a mobile app that fits your user’s hand or a complex web system that powers your operations behind the scenes, we ensure it works smoothly and grows with your goals.":
      "نركز على الوضوح والسرعة والوظيفة. سواء كان تطبيقًا يناسب يد المستخدم أو نظام ويب معقدًا يدير عملياتك، فإننا نضمن عمله بسلاسة وتطوره مع أهدافك.",
    "Full-Scale Web Development Services": "خدمات تطوير الويب الكاملة",
    "Want to streamline your operations, enhance customer engagement, or bring a new product to life? Qodiy has you covered. Our full-spectrum web development services are tailored to your business goals—flexible, scalable, and crafted to drive results.":
      "هل تريد تبسيط عملياتك، وزيادة تفاعل العملاء، أو إطلاق منتج جديد؟ كودي تغطي كل ذلك. خدمات تطوير الويب الشاملة لدينا مصممة لأهداف عملك — مرنة، وقابلة للتوسع، وموجهة لتحقيق النتائج.",
    "iOS App Development": "تطوير تطبيقات iOS",
    "iOS apps that do more than good looks – work where it counts.": "تطبيقات iOS تتجاوز المظهر الجيد — تعمل حيثما يُهم الأمر.",
    "Android App Development": "تطوير تطبيقات Android",
    "Custom Android apps built with a purpose.": "تطبيقات أندرويد مخصصة مصممة بهدف واضح.",
    
    "Key Pillars for Development Success": "الركائز الأساسية لنجاح التطوير",

    "Speed and Responsiveness": "السرعة والاستجابة",
    "Enjoy lightning-fast loading times and smooth navigation. Our apps are optimized for performance, keeping users engaged and frustration-free.":
      "استمتع بتحميل فائق السرعة وتنقل سلس. تطبيقاتنا مُحسّنة للأداء لإبقاء المستخدمين متفاعلين دون إحباط.",

    "Cross-Platform Compatibility": "التوافق عبر المنصات",
    "Our cross-platform app development expertise allows us to build high-performing apps for both iOS and Android.":
      "خبرتنا في تطوير التطبيقات متعددة المنصات تسمح لنا بإنشاء تطبيقات عالية الأداء لكل من iOS و Android.",

    "Data Security and Privacy": "أمان البيانات والخصوصية",
    "We employ robust encryption and protection measures to protect your app from data breaches and potential cyber threats.":
      "نستخدم تشفيرًا قويًا وتدابير حماية لحماية تطبيقك من اختراق البيانات والتهديدات الإلكترونية المحتملة.",

    "Scalability": "القابلية للتوسع",
    "Implementing scalable architecture within your mobile app project helps you handle increasing user loads without compromising speed.":
      "تنفيذ بنية قابلة للتوسع في مشروع تطبيقك يساعدك على التعامل مع زيادات عدد المستخدمين دون التأثير على السرعة.",

    "User-Centric Design": "تصميم يركز على المستخدم",
    "We design intuitive, engaging interfaces with a user-centric approach to ensure maximum user satisfaction and higher app adoption rates.":
      "نصمم واجهات بديهية وجذابة باستخدام نهج يركز على المستخدم لضمان أقصى درجات الرضا وزيادة اعتماد التطبيق.",

    "Android Apps": "تطبيقات Android",
    "AI": "الذكاء الاصطناعي",
    "Web Apps": "تطبيقات الويب",
    "UI Design": "تصميم واجهة المستخدم",
    "DevOps": "ديف أوبس",
    "Process Automation": "أتمتة العمليات",
    "IoT": "إنترنت الأشياء",
    "iOS Apps": "تطبيقات iOS",
    "Business Process Redesign": "إعادة تصميم العمليات التجارية",
    "Mobile Apps": "تطبيقات الجوال",
    "UX Design": "تصميم تجربة المستخدم",

    "Strategies, Impactful Results": "استراتيجيات ونتائج فعالة",

    "projects delivered": "مشاريع تم تسليمها",
    "satisfied clients": "عملاء راضون",
    "Net Promoter Score (NPS)": "مؤشر رضا العملاء (NPS)",

    "Web Applications for Every Business": "تطبيقات ويب لكل نوع من الأعمال",

    "Early-Stage Startups": "الشركات الناشئة",
    "Accelerate growth with our cost-effective Web app. Validate your business model and reach your target market.":
      "سرّع النمو باستخدام تطبيق ويب فعّال من حيث التكلفة. تحقق من نموذج عملك وحقق الوصول إلى السوق المستهدفة.",

    "Established Enterprises": "المؤسسات القائمة",
    "Transform your business with enterprise-grade Web solutions. Improve operational efficiency and gain a competitive edge.":
      "حوّل عملك باستخدام حلول ويب بمستوى المؤسسات. حسّن الكفاءة التشغيلية واحصل على ميزة تنافسية.",

    "Growth-Stage Companies": "شركات في طور النمو",
    "Scale your operations efficiently with our scalable Web platforms. Enhance customer experience and drive revenue.":
      "وسّع عملياتك بكفاءة باستخدام منصات ويب قابلة للتوسع. حسّن تجربة العملاء وزد من الإيرادات.",

    "Independent Software Vendors (ISVs)": "البائعون المستقلون للبرمجيات",
    "Leverage our expertise to build and launch your Web product. Focus on innovation while our skilled web developers handle the technicalities.":
      "استفد من خبرتنا في تطوير وإطلاق منتجك على الويب. ركّز على الابتكار بينما يتولى المطورون الخبراء لدينا الجوانب التقنية.",

    "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the": "نقود ابتكارات الغد — نساعد المبدعين على التصميم والبناء والتوسع باستخدام",
    "Power of AI": "قوة الذكاء الاصطناعي",

    "Facebook": "فيسبوك",
    "Twitter": "تويتر",
    "Instagram": "إنستغرام",
    "Linkedin": "لينكدإن",

    "CONTACT": "اتصل بنا",
    "support@qodiy.com": "support@qodiy.com",
    "+966 567-987-666": "+966 567-987-666",
    "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",

    "COMPANY": "الشركة",
    "Contact": "اتصال",
    "Web Development Service": "خدمة تطوير الويب",
    "App Development Service": "خدمة تطوير التطبيقات",
    "Digital Marketing": "التسويق الرقمي",
    "Content Creation": "إنشاء المحتوى",
    "SEO": "تحسين محركات البحث",

    "Terms of use": "شروط الاستخدام",
    "Privacy Policy": "سياسة الخصوصية",
    "Sitemap": "خريطة الموقع",
    "Code the Future. Build Beyond": "برمج المستقبل. وابنِ لما هو أبعد.",

// Digital
// Marketing

  "Skip to content": "تخطي إلى المحتوى",
  "Services": "الخدمات",
  "Work": "الأعمال",
  "Method": "المنهجية",
  "About": "نبذة عنا",
  "Integration": "التكامل",
  "Get In Touch": "تواصل معنا",

  "Digital Marketing": "التسويق الرقمي",

  "Digital marketing isn’t just about being online—it’s about being seen by the right people at the right time, in the right way. At We Think, we don’t just create marketing strategies; we craft strategic roadmaps that connect your brand with real audiences who care.":
    "التسويق الرقمي ليس مجرد التواجد على الإنترنت — بل هو الظهور أمام الأشخاص المناسبين، في الوقت المناسب، وبالطريقة المناسبة. في وي ثينك، لا نقوم فقط بإنشاء استراتيجيات تسويق، بل نصمم خرائط طريق استراتيجية تربط علامتك التجارية بجمهور حقيقي يهتم.",

  "Visibility with strategy. Growth with precision.": "رؤية مدروسة. ونمو بدقة.",

  "We don’t just run ads or schedule posts—we focus on long-term digital presence. Our creative team builds engaging content while our analysts focus on data. It’s a balance of storytelling and strategy, art and analytics.":
    "لا نقوم فقط بتشغيل الإعلانات أو جدولة المنشورات — بل نركز على الوجود الرقمي المستدام. فريقنا الإبداعي يُنشئ محتوى جذابًا بينما يركز محللونا على البيانات. إنها موازنة بين السرد الاستراتيجي، والفن، والتحليل.",

  "We ensure every action supports your goals: awareness, traffic, or conversions. By combining audience behavior, platform trends, and clear messaging, we help your business stand out in busy digital spaces. True digital marketing isn’t just about clicks—it’s about lasting connections and meaningful outcomes.":
    "نضمن أن يدعم كل إجراء أهدافك سواء كانت زيادة الوعي أو الحركة أو التحويلات. من خلال دمج سلوك الجمهور، واتجاهات المنصات، والرسائل الواضحة، نساعد عملك على التميز في المساحات الرقمية المزدحمة. التسويق الرقمي الحقيقي لا يقتصر على النقرات — بل يتعلق ببناء علاقات مستدامة ونتائج مؤثرة.",

  "Conversations that matter. Content that sticks.": "محادثات ذات قيمة. ومحتوى يترك أثرًا.",

  "Social media is where attention lives—and we make sure your brand lives there, too. At We Think, we handle social media marketing with purpose. We go beyond scheduling posts and counting likes. Our process involves studying your audience, creating relatable content, and using each platform’s strengths to spark interaction.":
    "وسائل التواصل الاجتماعي هي حيث يعيش الانتباه — ونحن نحرص على تواجد علامتك التجارية هناك أيضًا. في وي ثينك، نتعامل مع التسويق عبر وسائل التواصل الاجتماعي بهدف واضح. نتجاوز مجرد جدولة المنشورات وعدّ الإعجابات. تشمل عمليتنا دراسة جمهورك، وإنشاء محتوى يلامس اهتماماتهم، واستخدام نقاط القوة في كل منصة لتعزيز التفاعل.",

  "Key Pillars for Development Success": "الركائز الأساسية لنجاح التطوير",

  "Speed and Responsiveness": "السرعة وسرعة الاستجابة",
  "Enjoy lightning-fast loading times and smooth navigation. Our apps are optimized for performance, keeping users engaged and frustration-free.":
    "استمتع بأوقات تحميل سريعة وتنقل سلس. تطبيقاتنا مُحسّنة للأداء، مما يُبقي المستخدمين متفاعلين ويقلل من الإحباط.",

  "Cross-Platform Compatibility": "التوافق عبر الأنظمة",
  "Our cross-platform app development expertise allows us to build high-performing apps for both iOS and Android.":
    "خبرتنا في تطوير التطبيقات متعددة الأنظمة تُمكننا من إنشاء تطبيقات عالية الأداء لكل من iOS وAndroid.",

  "Data Security and Privacy": "أمان البيانات والخصوصية",
  "We employ robust encryption and protection measures to protect your app from data breaches and potential cyber threats.":
    "نستخدم تشفيرًا قويًا وتدابير حماية لضمان أمان تطبيقك ضد الاختراقات والتهديدات الإلكترونية.",

  "Scalability": "القدرة على التوسع",
  "Implementing scalable architecture within your mobile app project helps you handle increasing user loads without compromising speed.":
    "تنفيذ بنية قابلة للتوسع داخل مشروع تطبيقك يساعدك على التعامل مع زيادة المستخدمين دون التأثير على السرعة.",

  "User-Centric Design": "تصميم يركز على المستخدم",
  "We design intuitive, engaging interfaces with a user-centric approach to ensure maximum user satisfaction and higher app adoption rates.":
    "نصمم واجهات سهلة وجذابة باستخدام نهج يركز على المستخدم لضمان أقصى رضا وزيادة استخدام التطبيق.",

  "Android Apps": "تطبيقات أندرويد",
  "AI": "الذكاء الاصطناعي",
  "Web Apps": "تطبيقات الويب",
  "UI Design": "تصميم واجهة المستخدم",
  "DevOps": "ديف أوبس",
  "Process Automation": "أتمتة العمليات",
  "IoT": "إنترنت الأشياء",
  "iOS Apps": "تطبيقات iOS",
  "Business Process Redesign": "إعادة تصميم العمليات التجارية",
  "Mobile Apps": "تطبيقات الجوال",
  "UX Design": "تصميم تجربة المستخدم",

  "Strategies, Impactful Results": "استراتيجيات ونتائج مؤثرة",

  "projects delivered": "مشاريع تم تسليمها",
  "satisfied clients": "عملاء راضون",
  "Net Promoter Score (NPS)": "مؤشر رضا العملاء (NPS)",

  "Web Applications for Every Business": "تطبيقات الويب لكل نوع من الأعمال",

  "Early-Stage Startups": "الشركات الناشئة",
  "Accelerate growth with our cost-effective Web app. Validate your business model and reach your target market.":
    "سرّع النمو باستخدام تطبيق ويب فعال من حيث التكلفة. تحقق من نموذج عملك وحقق الوصول إلى السوق المستهدفة.",

  "Established Enterprises": "المؤسسات القائمة",
  "Transform your business with enterprise-grade Web solutions. Improve operational efficiency and gain a competitive edge.":
    "حوّل عملك باستخدام حلول ويب بمستوى المؤسسات. حسّن الكفاءة التشغيلية واحصل على ميزة تنافسية.",

  "Growth-Stage Companies": "شركات في طور النمو",
  "Scale your operations efficiently with our scalable Web platforms. Enhance customer experience and drive revenue.":
    "وسع عملياتك بكفاءة باستخدام منصات ويب قابلة للتوسع. حسّن تجربة العملاء وزد الإيرادات.",

  "Independent Software Vendors (ISVs)": "مقدمو البرمجيات المستقلون",
  "Leverage our expertise to build and launch your Web product. Focus on innovation while our skilled web developers handle the technicalities.":
    "استفد من خبرتنا في بناء وإطلاق منتجك على الويب. ركّز على الابتكار بينما يتولى مطورونا المحترفون الجوانب التقنية.",

  "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the": "ندعم ابتكارات الغد — نساعد الرواد في التصميم، والبناء، والتوسع باستخدام",
  "Power of AI": "قوة الذكاء الاصطناعي",

  "CONTACT": "اتصل بنا",
  "support@qodiy.com": "support@qodiy.com",
  "+966 567-987-666": "+966 567-987-666",
  "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",

  "COMPANY": "الشركة",
  "Contact": "اتصل بنا",
  "Web Development Service": "خدمة تطوير الويب",
  "App Development Service": "خدمة تطوير التطبيقات",
  "Digital Marketing": "التسويق الرقمي",
  "Content Creation": "إنشاء المحتوى",
  "SEO": "تحسين محركات البحث",
  
  "Terms of use": "شروط الاستخدام",
  "Privacy Policy": "سياسة الخصوصية",
  "Sitemap": "خريطة الموقع",
  "Code the Future. Build Beyond": "برمج المستقبل. وابنِ لما هو أبعد.",

// Content Creation

  "Skip to content": "تخطي إلى المحتوى",
  "logo-b": "شعار ب",
  "Services": "الخدمات",
  "Work": "الأعمال",
  "Method": "المنهجية",
  "About": "من نحن",
  "Integration": "التكامل",
  "Get In Touch": "تواصل معنا",

  "Content Creation": "إنشاء المحتوى",
  "Content creation is the full process of turning thoughts into powerful tools. At We Think, we approach it as a craft, starting with understanding your audience and then shaping every message to feel natural, focused, and relevant. From brand voice to platform strategy, everything is deliberate. Whether visual, written, or interactive, our work is rooted in clear thinking and strong intent.":
    "إنشاء المحتوى هو عملية تحويل الأفكار إلى أدوات قوية. في وي ثينك، نتعامل معه كحرفة تبدأ بفهم جمهورك، ثم نصوغ كل رسالة لتكون طبيعية، مركزة وذات صلة. من نبرة العلامة التجارية إلى استراتيجية المنصات — كل شيء يتم بشكل مدروس. سواء كان المحتوى مرئيًا أو مكتوبًا أو تفاعليًا، فإن عملنا قائم على تفكير واضح ونية قوية.",

  "Every piece serves a goal, speaks to real people":
    "كل جزء يخدم هدفًا، ويتحدث إلى أشخاص حقيقيين",

  "We don’t believe in filler. Every piece serves a goal, speaks to real people, and feels like a conversation, not content for content’s sake. We help your brand communicate clearly, consistently, and creatively across every platform that matters.":
    "نحن لا نؤمن بالمحتوى غير المفيد. كل جزء يخدم هدفًا، ويتحدث إلى أشخاص حقيقيين، ويبدو وكأنه محادثة وليس مجرد محتوى من أجل المحتوى. نساعد علامتك التجارية على التواصل بشكل واضح ومتسق ومبتكر عبر جميع المنصات المهمة.",

  "Say what matters—right where it matters most.":
    "قل ما هو مهم — في المكان الذي يهم أكثر.",

  "At We Think, we approach it as a craft, starting with understanding your audience":
    "في وي ثينك، نتعامل معه كفن، يبدأ بفهم جمهورك.",

  "Website Content": "محتوى المواقع الإلكترونية",
  "At We Think, we build fully custom websites from the ground up—tailored to your unique goals, style, and operations, with smart, scalable solutions.":
    "في وي ثينك، نقوم ببناء مواقع مخصصة بالكامل من الصفر — وفقًا لأهدافك، وأسلوبك، وطبيعة عملك، باستخدام حلول ذكية وقابلة للتوسع.",

  "Blogs": "المدونات",
  "At We Think, we use PHP to build stable, secure, and dynamic systems with clean, scalable code that powers your platform smartly and seamlessly behind the scenes.":
    "في وي ثينك، نستخدم PHP لبناء أنظمة مستقرة وآمنة وديناميكية مع كود نظيف وقابل للتوسع يعمل خلف الكواليس بسلاسة وذكاء.",

  "Email Content": "محتوى البريد الإلكتروني",

  "Key Pillars for Development Success": "الركائز الأساسية لنجاح التطوير",

  "Speed and Responsiveness": "السرعة والاستجابة",
  "Enjoy lightning-fast loading times and smooth navigation. Our apps are optimized for performance, keeping users engaged and frustration-free.":
    "استمتع بسرعة تحميل فائقة وتنقل سلس. تطبيقاتنا محسّنة للأداء للحفاظ على تفاعل المستخدمين وخالية من الإحباط.",

  "Cross-Platform Compatibility": "التوافق عبر الأنظمة",
  "Our cross-platform app development expertise allows us to build high-performing apps for both iOS and Android.":
    "خبرتنا في تطوير التطبيقات عبر الأنظمة تتيح لنا إنشاء تطبيقات عالية الأداء لكل من iOS وAndroid.",

  "Data Security and Privacy": "أمان وخصوصية البيانات",
  "We employ robust encryption and protection measures to protect your app from data breaches and potential cyber threats.":
    "نستخدم تقنيات تشفير قوية وتدابير حماية لحماية تطبيقك من اختراقات البيانات والتهديدات السيبرانية.",

  "Scalability": "القابلية للتوسع",
  "Implementing scalable architecture within your mobile app project helps you handle increasing user loads without compromising speed.":
    "تنفيذ بنية قابلة للتوسع في تطبيقك يساعدك على التعامل مع زيادة المستخدمين دون التأثير على السرعة.",

  "User-Centric Design": "تصميم يركز على المستخدم",
  "We design intuitive, engaging interfaces with a user-centric approach to ensure maximum user satisfaction and higher app adoption rates.":
    "نصمم واجهات سهلة وجذابة بمنهج يركز على المستخدم لضمان رضا المستخدم وزيادة معدل اعتماد التطبيق.",

  "Android Apps": "تطبيقات أندرويد",
  "AI": "الذكاء الاصطناعي",
  "Web Apps": "تطبيقات الويب",
  "UI Design": "تصميم واجهة المستخدم",
  "DevOps": "ديف أوبس",
  "Process Automation": "أتمتة العمليات",
  "IoT": "إنترنت الأشياء",
  "iOS Apps": "تطبيقات iOS",
  "Business Process Redesign": "إعادة تصميم العمليات التجارية",
  "Mobile Apps": "تطبيقات الجوال",
  "UX Design": "تصميم تجربة المستخدم",

  "Strategies, Impactful Results": "استراتيجيات ونتائج مؤثرة",

  "projects delivered": "مشاريع تم تسليمها",
  "satisfied clients": "عملاء راضون",
  "Net Promoter Score (NPS)": "مؤشر رضا العملاء (NPS)",

  "Web Applications for Every Business": "تطبيقات الويب لجميع أنواع الأعمال",

  "Early-Stage Startups": "الشركات الناشئة",
  "Accelerate growth with our cost-effective Web app. Validate your business model and reach your target market.":
    "سرّع نموك من خلال تطبيق ويب فعّال من حيث التكلفة. تحقق من نموذج عملك وحقق الوصول إلى جمهورك المستهدف.",

  "Established Enterprises": "المؤسسات القائمة",
  "Transform your business with enterprise-grade Web solutions. Improve operational efficiency and gain a competitive edge.":
    "حوّل عملك باستخدام حلول ويب على مستوى المؤسسات. حسّن الكفاءة التشغيلية واحصل على ميزة تنافسية.",

  "Growth-Stage Companies": "شركات في مرحلة النمو",
  "Scale your operations efficiently with our scalable Web platforms. Enhance customer experience and drive revenue.":
    "وسّع عملياتك بكفاءة باستخدام منصات ويب قابلة للتوسع. حسّن تجربة العملاء وزد الإيرادات.",

  "Independent Software Vendors (ISVs)": "مزودو البرمجيات المستقلون",
  "Leverage our expertise to build and launch your Web product. Focus on innovation while our skilled web developers handle the technicalities.":
    "استفد من خبرتنا لبناء وإطلاق منتجك على الويب. ركّز على الابتكار بينما يتولى مطورونا المهرة الأمور التقنية.",

  "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the": "نُطلق ابتكارات الغد — نساعد الروّاد في التصميم والبناء والتوسع باستخدام",
  "Power of AI": "قوة الذكاء الاصطناعي",

  "CONTACT": "اتصل بنا",
  "support@qodiy.com": "support@qodiy.com",
  "+966 567-987-666": "+966 567-987-666",
  "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",

  "COMPANY": "الشركة",
  "Contact": "اتصل بنا",

  "Web Development Service": "خدمة تطوير المواقع",
  "App Development Service": "خدمة تطوير التطبيقات",
  "Digital Marketing": "التسويق الرقمي",
  "Content Creation": "إنشاء المحتوى",
  "SEO": "تحسين محركات البحث",

  "Terms of use": "شروط الاستخدام",
  "Privacy Policy": "سياسة الخصوصية",
  "Sitemap": "خريطة الموقع",
  "Code the Future. Build Beyond": "برمج المستقبل. وابنِ لما هو أبعد.",

// Search Engine Optimization

  "Skip to content": "تخطي إلى المحتوى",
  "logo-b": "شعار ب",
  "Services": "الخدمات",
  "Work": "الأعمال",
  "Method": "المنهجية",
  "About": "من نحن",
  "Integration": "التكامل",
  "Get In Touch": "تواصل معنا",

  "Search Engine Optimization": "تحسين محركات البحث (SEO)",
  "At We Think, we don’t rely on luck to see your business online. Our unique SEO approach is about earning attention, not just chasing algorithms. We delve into how people behave on search, their questions, and how your site can provide real value. Instead of attracting traffic, we focus on the kind that matters.":
    "في We Think، لا نعتمد على الحظ لتظهر أعمالك على الإنترنت. طريقتنا الفريدة في تحسين محركات البحث تركز على جذب الانتباه الحقيقي، وليس فقط ملاحقة الخوارزميات. نحن نحلل سلوك الأشخاص أثناء البحث، وأسئلتهم، وكيف يمكن لموقعك تقديم قيمة حقيقية. بدلاً من جذب زيارات عشوائية، نركز على الزيارات التي تُحدث فرقاً.",

  "Every decision, from site structure to content, is driven by a strategic insight.":
    "كل قرار — من بنية الموقع إلى المحتوى — يستند إلى رؤية استراتيجية.",

  "Our assistance strengthens your digital presence, making it smarter and more consistent with how people search. It’s not about being everywhere—it’s about showing up where it counts with something worth clicking.":
    "دعمنا يعزز حضورك الرقمي، ويجعله أكثر ذكاءً وتوافقًا مع طريقة بحث الناس. الأمر لا يتعلق بالظهور في كل مكان، بل بالظهور في الأماكن المهمة مع محتوى يستحق النقر.",

  "Turn real questions into search-ready answers.": "حوّل الأسئلة الحقيقية إلى إجابات جاهزة للبحث.",
  "We Think focuses on smart keyword planning that matches how people actually search. Our strategy looks beyond basic keywords—we focus on what people mean, not just what they type.":
    "في We Think، نركز على تخطيط ذكي للكلمات المفتاحية يعكس طريقة بحث الناس الحقيقية. استراتيجيتنا تتجاوز الكلمات البسيطة — نحن نركز على نية المستخدم، وليس فقط على ما يكتبه.",

  "Upfront Audit": "تحليل أولي",
  "At We Think, we build fully custom websites from the ground up—tailored to your unique goals, style, and operations, with smart, scalable solutions.":
    "في We Think، نقوم ببناء مواقع مخصصة بالكامل من البداية — مصممة وفقًا لأهدافك، وأسلوبك، وطبيعة عملك، باستخدام حلول ذكية وقابلة للتوسع.",

  "Backlink Strategy": "استراتيجية الروابط الخلفية",
  "Ongoing Optimization": "التحسين المستمر",

  "Key Pillars for Development Success": "الركائز الأساسية لنجاح التطوير",

  "Speed and Responsiveness": "السرعة والاستجابة",
  "Enjoy lightning-fast loading times and smooth navigation. Our apps are optimized for performance, keeping users engaged and frustration-free.":
    "استمتع بسرعة تحميل فائقة وتنقل سلس. تطبيقاتنا محسّنة للأداء للحفاظ على تفاعل المستخدمين وخالية من الإحباط.",

  "Cross-Platform Compatibility": "التوافق عبر الأنظمة",
  "Our cross-platform app development expertise allows us to build high-performing apps for both iOS and Android.":
    "خبرتنا في تطوير التطبيقات عبر الأنظمة تتيح لنا إنشاء تطبيقات عالية الأداء لكل من iOS وAndroid.",

  "Data Security and Privacy": "أمان وخصوصية البيانات",
  "We employ robust encryption and protection measures to protect your app from data breaches and potential cyber threats.":
    "نستخدم تقنيات تشفير قوية وتدابير حماية لحماية تطبيقك من اختراقات البيانات والتهديدات السيبرانية.",

  "Scalability": "القابلية للتوسع",
  "Implementing scalable architecture within your mobile app project helps you handle increasing user loads without compromising speed.":
    "تنفيذ بنية قابلة للتوسع في تطبيقك يساعدك على التعامل مع زيادة المستخدمين دون التأثير على السرعة.",

  "User-Centric Design": "تصميم يركز على المستخدم",
  "We design intuitive, engaging interfaces with a user-centric approach to ensure maximum user satisfaction and higher app adoption rates.":
    "نصمم واجهات سهلة وجذابة بمنهج يركز على المستخدم لضمان رضا المستخدم وزيادة معدل اعتماد التطبيق.",

  "Android Apps": "تطبيقات أندرويد",
  "AI": "الذكاء الاصطناعي",
  "Web Apps": "تطبيقات الويب",
  "UI Design": "تصميم واجهة المستخدم",
  "DevOps": "ديف أوبس",
  "Process Automation": "أتمتة العمليات",
  "IoT": "إنترنت الأشياء",
  "iOS Apps": "تطبيقات iOS",
  "Business Process Redesign": "إعادة تصميم العمليات التجارية",
  "Mobile Apps": "تطبيقات الهاتف المحمول",
  "UX Design": "تصميم تجربة المستخدم",

  "Strategies, Impactful Results": "استراتيجيات ونتائج مؤثرة",

  "projects delivered": "مشاريع تم تسليمها",
  "satisfied clients": "عملاء راضون",
  "Net Promoter Score (NPS)": "مؤشر رضا العملاء (NPS)",

  "Web Applications for Every Business": "تطبيقات الويب لجميع أنواع الأعمال",

  "Early-Stage Startups": "الشركات الناشئة",
  "Accelerate growth with our cost-effective Web app. Validate your business model and reach your target market.":
    "سرّع نموك من خلال تطبيق ويب فعّال من حيث التكلفة. تحقق من نموذج عملك وحقق الوصول إلى جمهورك المستهدف.",

  "Established Enterprises": "المؤسسات القائمة",
  "Transform your business with enterprise-grade Web solutions. Improve operational efficiency and gain a competitive edge.":
    "حوّل عملك باستخدام حلول ويب على مستوى المؤسسات. حسّن الكفاءة التشغيلية واحصل على ميزة تنافسية.",

  "Growth-Stage Companies": "شركات في مرحلة النمو",
  "Scale your operations efficiently with our scalable Web platforms. Enhance customer experience and drive revenue.":
    "وسّع عملياتك بكفاءة باستخدام منصات ويب قابلة للتوسع. حسّن تجربة العملاء وزد الإيرادات.",

  "Independent Software Vendors (ISVs)": "مزودو البرمجيات المستقلون",
  "Leverage our expertise to build and launch your Web product. Focus on innovation while our skilled web developers handle the technicalities.":
    "استفد من خبرتنا لبناء وإطلاق منتجك على الويب. ركّز على الابتكار بينما يتولى مطورونا المهرة الأمور التقنية.",

  "Fueling tomorrow’s innovations — we help visionaries design, build, and scale with the":
    "نُطلق ابتكارات الغد — نساعد الروّاد في التصميم والبناء والتوسع باستخدام",
  "Power of AI": "قوة الذكاء الاصطناعي",

  "CONTACT": "اتصل بنا",
  "support@qodiy.com": "support@qodiy.com",
  "+966 567-987-666": "+966 567-987-666",
  "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",

  "COMPANY": "الشركة",
  "Contact": "اتصل بنا",

  "Web Development Service": "خدمة تطوير المواقع",
  "App Development Service": "خدمة تطوير التطبيقات",
  "Digital Marketing": "التسويق الرقمي",
  "Content Creation": "إنشاء المحتوى",
  "SEO": "تحسين محركات البحث",

  "Terms of use": "شروط الاستخدام",
  "Privacy Policy": "سياسة الخصوصية",
  "Sitemap": "خريطة الموقع",
  "Code the Future. Build Beyond": "برمج المستقبل. وابنِ لما هو أبعد.",
     "Digital": "رقمي",
    "Marketing": "تسويق",
    "Digital marketing isn’t just about being online—it’s about being seen by the right people at the right time, in the right way. At": 
      "التسويق الرقمي ليس مجرد التواجد على الإنترنت — بل أن يتم رؤيتك من قبل الأشخاص المناسبين، في الوقت المناسب، وبالطريقة الصحيحة. في",
      
    "We Think": "نحن نفكر",
    
    ", we don’t just create marketing strategies; we craft strategic roadmaps that connect your brand with real audiences who care.":
      "، نحن لا ننشئ استراتيجيات تسويقية فقط؛ بل نصنع خرائط طريق استراتيجية تربط علامتك التجارية بجمهور حقيقي يهتم بها.",
       "Digital marketing isn't just about being online—it's about being seen by the right people at the right time, in the right way.":
      "التسويق الرقمي ليس مجرد التواجد على الإنترنت — بل أن يتم رؤيتك من قبل الأشخاص المناسبين، في الوقت المناسب، وبالطريقة الصحيحة.",
"VISIBILITY WITH STRATEGY. GROWTH WITH PRECISION.": "رؤية باستراتيجية. نمو بدقة.",
"At ": "في ",
    "We Think": "نحن نفكر",
    ", we don’t just create marketing strategies; we craft strategic roadmaps that connect your brand with real audiences who care. We don’t just run ads or schedule posts—we focus on long-term digital presence. Our creative team builds engaging content while our analysts focus on data. It’s a balance of storytelling and strategy, art and analytics.":
    "، لا نقوم فقط بإنشاء استراتيجيات تسويقية؛ بل نرسم خرائط طريق استراتيجية تربط علامتك التجارية بجمهور حقيقي يهتم. نحن لا نكتفي بتشغيل الإعلانات أو جدولة المنشورات — بل نركز على الحضور الرقمي طويل الأمد. يبني فريقنا الإبداعي محتوى جذابًا بينما يركز محللونا على البيانات. إنها موازنة بين السرد الاستراتيجي والفن والتحليل.",
    
    "We ensure every action supports your goals: awareness, traffic, or conversions. By combining audience behavior, platform trends, and clear messaging, we help your business stand out in busy digital spaces. True digital marketing isn’t just about clicks—it’s about lasting connections and meaningful outcomes.":
    "نحن نضمن أن يدعم كل إجراء أهدافك: الوعي، أو الزيارات، أو التحويلات. من خلال الجمع بين سلوك الجمهور، واتجاهات المنصات، والرسائل الواضحة، نساعد عملك على التميز في المساحات الرقمية المزدحمة. التسويق الرقمي الحقيقي لا يتعلق فقط بالنقرات — بل يتعلق بالروابط الدائمة والنتائج ذات المعنى.",
    "Facebook Marketing": "تسويق فيسبوك",
    "At We Think, we build fully custom websites from the ground up—tailored to your unique goals, style, and operations, with smart, scalable solutions.":
      "في نحن نفكر، نقوم ببناء مواقع إلكترونية مخصصة بالكامل من الألف إلى الياء — مصممة خصيصًا لتناسب أهدافك وأسلوبك وعملياتك، باستخدام حلول ذكية وقابلة للتوسع.",    
       "Instagram Marketing": "تسويق إنستغرام",
      "At We Think, we use PHP to build stable, secure, and dynamic systems with clean, scalable code that powers your platform smartly and seamlessly behind the scenes.": 
        "في نحن نفكر، نستخدم PHP لبناء أنظمة مستقرة وآمنة وديناميكية، مع كود نظيف وقابل للتوسع يدعم منصتك بذكاء وسلاسة خلف الكواليس.",
        'Twitter/X Marketing': 'تسويق تويتر/إكس',
    'At We Think, we use PHP to build stable, secure, and dynamic systems with clean, scalable code that powers your platform smartly and seamlessly behind the scenes.':
      'في We Think، نستخدم PHP لبناء أنظمة مستقرة وآمنة وديناميكية بكود نظيف وقابل للتطوير يدعم منصتك بذكاء وسلاسة خلف الكواليس.',

"Let's Talk": "دعنا نتحدث",
 "Accelerating Innovation for 10 Years.": "نُسرّع الابتكار منذ 15 عامًا.",
    "We’ve perfected a high-speed process that consistently delivers exceptional results.": "أتقنّا عملية عالية السرعة تقدم نتائج استثنائية باستمرار.",
    "From bootstrapped startups to established enterprises, we provide tailored Web applications to drive growth. Our expertise spans the entire business lifecycle.":
      "من الشركات الناشئة الممولة ذاتيًا إلى المؤسسات الراسخة، نقدم تطبيقات ويب مصممة خصيصًا لدفع عجلة النمو. تمتد خبرتنا عبر دورة الأعمال بأكملها.",
       "+966 567-987-666": "+٩٦٦ ٥٦٧-٩٨٧-٦٦٦",
"Content creation is the full process of turning thoughts into powerful tools. At We Think, we approach it as a craft, starting with understanding your audience and then shaping every message to feel natural, focused, and relevant. From brand voice to platform strategy, everything is deliberate. Whether visual, written, or interactive, our work is rooted in clear thinking and strong intent.":
" إنشاء المحتوى هو عملية كاملة لتحويل الأفكار إلى أدوات قوية. في وي ثينك، نتعامل معه كحرفة، تبدأ بفهم جمهورك، ثم بصياغة كل رسالة لتكون طبيعية ومركزة وذات صلة. من صوت العلامة التجارية إلى استراتيجية المنصة، كل شيء يتم بعناية وهدف. سواء كان مرئيًا أو مكتوبًا أو تفاعليًا، فإن عملنا يستند إلى تفكير واضح ونية قوية.",
 "Let's Talk": "لنتحدث",
 "Accelerating Innovation for 10 Years. We’ve perfected a high-speed process that consistently delivers exceptional results.":
    "نُسرّع الابتكار منذ 15 عامًا. أتقنّا عملية عالية السرعة تقدم نتائج استثنائية باستمرار.",
"Delivered 300+ projects world-wide, with >95% business in North America.": 
"أنجزنا أكثر من 300 مشروع حول العالم، مع أكثر من 95٪ من الأعمال في أمريكا الشمالية.",




// Other
 "We Think partnered with a fast-growing rewards and discounts platform to design and develop a complete loyalty program for their brand.": "تعاونت نحن نفكر مع منصة مكافآت وخصومات سريعة النمو لتصميم وتطوير برنامج ولاء متكامل لعلامتهم التجارية.",
"We Think partnered with a U.S.-based real estate signage company to build a complete digital solution for managing sign installation requests.": "تعاونت نحن نفكر مع شركة أميركية متخصصة في لافتات العقارات لبناء حل رقمي متكامل لإدارة طلبات تركيب اللافتات.",
"We Think developed a full-featured eCommerce marketplace platform for clients seeking a system similar to Amazon or Daraz.": "قامت نحن نفكر بتطوير منصة سوق إلكتروني متكاملة للعملاء الذين يبحثون عن نظام مشابه لأمازون أو داراز.",
"We Think partnered with a private school to build a complete education management platform that supports digital learning, communication, and operations.": "تعاونت نحن نفكر مع مدرسة خاصة لبناء منصة متكاملة لإدارة التعليم تدعم التعلم الرقمي، والتواصل، والعمليات.",
"SIMPLIFYING DOT COMPLIANCE": "تبسيط الامتثال للوائح وزارة النقل الأمريكية",
'Unlock the power of limitless creativity. At the heart of every great idea is imagination—think bigger, go further, and bring bold visions to life.':
      'اكتشف قوة الإبداع اللامحدود. في قلب كل فكرة عظيمة توجد المخيلة — فكّر بشكل أوسع، وتقدّم أكثر، وحقّق رؤى جريئة إلى الحياة.',
'Schedule a Consultation': 'جدولة استشارة',
      "At the edge of innovation, We Think is proud to be one of": "على حافة الابتكار، تفخر نحن نفكر بكونها واحدة من",
    "KSA’s leading software companies—bringing innovative,": "شركات البرمجيات الرائدة في المملكة العربية السعودية — تقدم حلولًا",
    "reliable, and forward-thinking IT solutions to": "موثوقة، مبتكرة، ومتقدمة في مجال تكنولوجيا المعلومات",
    "businesses of all sizes. From concept": "للشركات من جميع الأحجام. من المفهوم",
    "to code, we turn bold ideas into powerful digital": "إلى البرمجة، نحول الأفكار الجريئة إلى منتجات رقمية",
    "products.": "فعالة وقوية.",
    "Our goal is simple: make your ideas work better using the right technology.": "هدفنا بسيط: جعل أفكارك تعمل بشكل أفضل باستخدام التقنية المناسبة.",
    "At We Think, every project is a chance to build something meaningful. We’re a team of skilled and passionate people who care about quality and understand the value of time.": "في نحن نفكر، كل مشروع هو فرصة لبناء شيء ذو معنى. نحن فريق من الأشخاص المهرة والمتحمسين الذين يهتمون بالجودة ويدركون قيمة الوقت.",
    "SAP Integration": "تكامل SAP",
    "SAP Integration connects your systems with SAP’s enterprise resource planning (ERP) solutions, enabling real-time data exchange, automated workflows, and streamlined business operations across finance, HR, supply chain, and more. Ask ChatGPT":
      "يربط تكامل SAP أنظمتك بحلول تخطيط موارد المؤسسات (ERP) من SAP، مما يتيح تبادل البيانات في الوقت الحقيقي، وأتمتة سير العمل، وتبسيط العمليات التجارية عبر المالية، والموارد البشرية، وسلسلة التوريد، والمزيد. اسأل ChatGPT",
      "At نحن نفكر، we don’t rely on luck to see your business online. Our unique SEO approach is about earning attention, not just chasing algorithms. We delve into how people behave on search, their questions, and how your site can provide real value. Instead of attracting traffic, we focus on the kind that matters.":
      "في نحن نفكر، لا نعتمد على الحظ لجعل عملك يظهر على الإنترنت. نهجنا الفريد في تحسين محركات البحث يتمحور حول كسب الانتباه وليس فقط ملاحقة الخوارزميات. نحن نتعمق في فهم سلوك الأشخاص في البحث، وأسئلتهم، وكيف يمكن لموقعك أن يقدم قيمة حقيقية. بدلاً من جذب أي نوع من الزوار، نركز على النوع الذي يهم فعلاً.",
      "At We Think, we don’t rely on luck to see your business online. Our unique SEO approach is about earning attention, not just chasing algorithms. We delve into how people behave on search, their questions, and how your site can provide real value. Instead of attracting traffic, we focus on the kind that matters.":
      "في نحن نفكر، لا نعتمد على الحظ لتواجد عملك عبر الإنترنت. نهجنا الفريد في تحسين محركات البحث يتمثل في كسب الانتباه، وليس فقط مطاردة الخوارزميات. نحن نتعمق في سلوك الأشخاص عند البحث، وأسئلتهم، وكيف يمكن لموقعك أن يقدم قيمة حقيقية. بدلاً من جذب أي نوع من الزيارات، نركز على النوع الذي يهم فعلاً.",
      



  }
};

function toggleLanguageMenu() {
    const menu = document.getElementById("language-options");
    menu.classList.toggle("dropdown-hidden");
  }

  function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-translatable]');
    const translation = mockTranslations[lang];

    if (lang === 'en') {
      elements.forEach(el => {
        const original = originalTexts.get(el);
        if (original) el.innerHTML = original;
      });
      localStorage.setItem('selectedLang', 'en');
      return;
    }

    if (!translation) return;

    elements.forEach(el => {
      const current = el.innerHTML.trim();
      if (!originalTexts.has(el)) {
        originalTexts.set(el, current);
      }

      if (translation[current]) {
        el.innerHTML = translation[current];
      } else {
        const fallback = el.innerText.trim();
        if (translation[fallback]) el.innerText = translation[fallback];
      }
    });

    localStorage.setItem('selectedLang', lang);
  }

  document.addEventListener('click', function (event) {
    const widget = document.getElementById("translate-widget");
    const menu = document.getElementById("language-options");
    if (!widget.contains(event.target)) {
      menu?.classList.add("dropdown-hidden");
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang === 'ar' || savedLang === 'en') {
      applyLanguage(savedLang);
    }
  });
//   document.addEventListener("DOMContentLoaded", function () {
//     const savedLang = localStorage.getItem('selectedLang');

// // Check if Arabic or English is selected
//     if (savedLang === 'ar' || savedLang === 'en') {
//       const activeMenuItems = document.querySelectorAll('.current-menu-item, .current-menu-ancestor');

//       if (activeMenuItems.length > 0) {
//         applyLanguage(savedLang); // Call your translation function

//         // OPTIONAL: Automatically hide language dropdown if it's open
//         const languageMenu = document.getElementById("language-options");
//         if (languageMenu && languageMenu.style.display === "flex") {
//           languageMenu.style.display = "none";
//         }
//       }
//     }
//   });