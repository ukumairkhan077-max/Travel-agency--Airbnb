// servicesData.js
// Structure: Each top-level object = one "Service" shown on the grid page (image 1).
// Clicking a service navigates to /services/:id which renders the detail page (image 2),
// where `heroImage` becomes the big left-side image and `subServices` becomes the
// scrollable right-side list (Nourishing Wellness Bites, Private Yoga & Energy Reset, etc).

const services = [
  // ─────────────────────────────────────────────────────────────
  // 1. YOGA / WELLNESS
  // ─────────────────────────────────────────────────────────────
  {
    id: "private-restorative-yoga-sanctuary",
    title: "Private Restorative Yoga Sanctuary",
    category: "Wellness",
    tagline:
      "I create deeply restorative private wellness experiences combining yoga, meditation, breathwork, sensory healing, relaxation, and embodied movement.",
    heroImage:
      "https://plus.unsplash.com/premium_photo-1664884884457-ba92b9ce5368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eWluJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5.0,
    reviewCount: 1,
    priceFrom: 31,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Lahore",
      area: "Gulberg",
      postcode: "54000",
      country: "Pakistan",
      providedAt: "Evelina's place",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-evelina",
      name: "Evelina",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      title: "Personal trainer in Gulberg, Lahore",
      experienceYears: 9,
      experienceSummary:
        "I teach yoga to groups, private students and corporate clients in Lahore.",
      careerHighlight:
        "I organize regular yoga workshops & retreats focused on self-knowing & healing",
      education:
        "I hold certifications in yoga teacher training, reiki, Thai yoga massage & chakra massage.",
    },
    guestRequirements: { minAge: 15, maxGuests: 2 },
    reviews: [
      {
        author: "Andrew",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        date: "October 2025",
        rating: 5,
        comment: "It was all perfect, thank you !",
      },
    ],
    subServices: [
      {
        id: "nourishing-wellness-bites",
        title: "Nourishing Wellness Bites",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
        description:
          "Enjoy a selection of homemade nourishing snacks and healthy sweet or savoury bites prepared with care. Pair with herbal tea, coffee, or a glass of wine and take time to slow down, relax, and savour the moment.",
        price: 31,
        priceUnit: "guest",
        duration: "30 mins",
      },
      {
        id: "private-yoga-energy-reset",
        title: "Private Yoga & Energy Reset",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
        description:
          "A grounding and uplifting private yoga session designed to release tension, open the body, and restore inner balance. Combining mindful movement, breathwork, chakra-focused practices, and guided meditation.",
        price: 196,
        priceUnit: "group",
        duration: "1 hr",
      },
      {
        id: "nervous-system-reset",
        title: "Nervous System Reset",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
        description:
          "Sink into deep rest through restorative yin yoga, guided relaxation, soothing sound, aromatherapy, and gentle touch. Includes a gentle head massage and sensory relaxation elements.",
        price: 250,
        priceUnit: "group",
        duration: "1 hr 30 mins",
      },
      {
        id: "sacred-sensory-immersion",
        title: "Sacred Sensory Immersion",
        image:
          "https://media.istockphoto.com/id/1304016718/photo/mid-adult-sporty-woman-trainer-do-practice-individual-hatha-yoga-instructor-training.webp?a=1&b=1&s=612x612&w=0&k=20&c=ciyHcIEAmxBPmXWc_x_THTufqgHgVrjz7JjA6F3iAew=",
        description:
          "A deeply immersive wellness ritual combining breathwork, assisted yoga stretches, soothing touch, Reiki energy healing, sound, scent, and calming visual beauty for complete relaxation.",
        price: 398,
        priceUnit: "group",
        duration: "2 hrs",
      },
      {
        id: "sunrise-meditation-breathwork",
        title: "Sunrise Meditation & Breathwork",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
        description:
          "Start your day with guided pranayama breathwork and seated meditation designed to clear the mind, boost focus, and set a calm intention for the day ahead.",
        price: 120,
        priceUnit: "group",
        duration: "45 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. FITNESS
  // ─────────────────────────────────────────────────────────────
  {
    id: "results-oriented-fitness-by-amram",
    title: "Results-oriented fitness by Amram",
    category: "Fitness",
    tagline:
      "High-energy, personalized training sessions built around measurable results — strength, mobility, and conditioning tailored to your goals.",
    heroImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    rating: null,
    reviewCount: 0,
    priceFrom: 61,
    currency: "USD",
    priceUnit: "guest",
    minimumToBook: 108,
    location: {
      city: "Islamabad",
      area: "F-6",
      postcode: "44000",
      country: "Pakistan",
      providedAt: "Local park or client's gym",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-amram",
      name: "Amram",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80",
      title: "Personal trainer in F-6, Islamabad",
      experienceYears: 7,
      experienceSummary:
        "I coach outdoor and gym-based sessions for individuals and small groups across Islamabad.",
      careerHighlight:
        "Former athlete turned coach, specializing in functional strength programming.",
      education:
        "Certified Personal Trainer (NASM), Sports Nutrition Certificate.",
    },
    guestRequirements: { minAge: 16, maxGuests: 4 },
    reviews: [],
    subServices: [
      {
        id: "full-body-strength-session",
        title: "Full Body Strength Session",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
        description:
          "A compound-movement strength session using bodyweight and free weights, designed to build functional strength and improve overall conditioning.",
        price: 61,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "hiit-conditioning-blast",
        title: "HIIT Conditioning Blast",
        image:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
        description:
          "High-intensity interval training designed to torch calories, boost cardiovascular fitness, and build mental resilience under time pressure.",
        price: 75,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "mobility-recovery-flow",
        title: "Mobility & Recovery Flow",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
        description:
          "A slower-paced session focused on joint mobility, stretching, and active recovery to reduce injury risk and improve movement quality.",
        price: 55,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "outdoor-bootcamp-group",
        title: "Outdoor Bootcamp (Group)",
        image:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
        description:
          "A fun, high-energy outdoor group workout combining circuits, sprints, and partner drills. Great for teams or friend groups.",
        price: 220,
        priceUnit: "group",
        duration: "1 hr",
      },
      {
        id: "nutrition-goal-consult",
        title: "Nutrition & Goal-Setting Consult",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
        description:
          "A one-on-one consult to review your current habits, set realistic performance and body-composition goals, and build a simple nutrition plan.",
        price: 90,
        priceUnit: "guest",
        duration: "40 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. MASSAGE (Bond Street)
  // ─────────────────────────────────────────────────────────────
  {
    id: "magical-hands-massage-bond-street",
    title: "Magical Hands Massage in top location - Clifton",
    category: "Massage",
    tagline:
      "Professional therapeutic massage delivered in a premium Clifton studio, tailored to relieve tension and restore balance.",
    heroImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    rating: 4.98,
    reviewCount: 64,
    priceFrom: 61,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Karachi",
      area: "Clifton",
      postcode: "75600",
      country: "Pakistan",
      providedAt: "Studio at Clifton",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: "Popular",
    provider: {
      id: "host-nadia",
      name: "Nadia",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      title: "Massage therapist in Clifton, Karachi",
      experienceYears: 11,
      experienceSummary:
        "Licensed massage therapist specializing in deep tissue and Swedish techniques.",
      careerHighlight:
        "Trained in Bali and Thailand; former spa lead therapist for a 5-star Karachi hotel.",
      education:
        "Diploma in Clinical Massage Therapy, Advanced Deep Tissue Certification.",
    },
    guestRequirements: { minAge: 18, maxGuests: 1 },
    reviews: [],
    subServices: [
      {
        id: "deep-tissue-massage",
        title: "Deep Tissue Massage",
        image:
          "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
        description:
          "Firm-pressure massage targeting deep muscle layers to relieve chronic tension, knots, and stiffness.",
        price: 61,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "swedish-relaxation-massage",
        title: "Swedish Relaxation Massage",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
        description:
          "Gentle, flowing strokes designed to ease tension, improve circulation, and promote full-body relaxation.",
        price: 55,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "hot-stone-therapy",
        title: "Hot Stone Therapy",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
        description:
          "Smooth heated stones combined with massage techniques to melt away tension and soothe tired muscles.",
        price: 89,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "aromatherapy-massage",
        title: "Aromatherapy Massage",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
        description:
          "A relaxing massage using essential oils selected to match your mood — calming, energizing, or balancing.",
        price: 65,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "couples-massage-experience",
        title: "Couples Massage Experience",
        image:
          "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
        description:
          "Side-by-side massage session for two, combining relaxation techniques in a shared, tranquil setting.",
        price: 150,
        priceUnit: "group",
        duration: "1 hr",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. MASSAGE (Advisory Board / Got Your Back)
  // ─────────────────────────────────────────────────────────────
  {
    id: "got-your-back-london",
    title: "Got Your Back Rawalpindi, Host Advisory Board massage",
    category: "Massage",
    tagline:
      "Award-winning massage therapy from an Airbnb Host Advisory Board member, focused on back and shoulder relief for busy professionals.",
    heroImage:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80",
    rating: 5.0,
    reviewCount: 212,
    priceFrom: 27,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Rawalpindi",
      area: "Bahria Town",
      postcode: "46000",
      country: "Pakistan",
      providedAt: "Therapist's studio",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: "Popular",
    provider: {
      id: "host-daniel",
      name: "Daniel",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      title: "Massage therapist in Bahria Town, Rawalpindi",
      experienceYears: 14,
      experienceSummary:
        "Member of the Airbnb Host Advisory Board; specialist in postural and back-focused therapy.",
      careerHighlight:
        "Featured speaker at Rawalpindi Wellness Summit 2024.",
      education:
        "BSc Sports Therapy, Advanced Myofascial Release Certification.",
    },
    guestRequirements: { minAge: 18, maxGuests: 1 },
    reviews: [],
    subServices: [
      {
        id: "back-shoulder-focus-massage",
        title: "Back & Shoulder Focus Massage",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
        description:
          "Targeted massage addressing upper back, shoulder, and neck tension common from desk work and screen time.",
        price: 27,
        priceUnit: "guest",
        duration: "30 mins",
      },
      {
        id: "postural-realignment-massage",
        title: "Postural Realignment Massage",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
        description:
          "A therapeutic session combining myofascial release and stretching to correct posture-related discomfort.",
        price: 68,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "sports-recovery-massage",
        title: "Sports Recovery Massage",
        image:
          "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80",
        description:
          "Deep, targeted work for athletes recovering from training or competition, improving flexibility and reducing soreness.",
        price: 72,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "express-desk-relief",
        title: "Express Desk Relief",
        image:
          "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
        description:
          "A quick, focused massage for those short on time — perfect for a lunch break reset.",
        price: 27,
        priceUnit: "guest",
        duration: "20 mins",
      },
      {
        id: "full-body-therapeutic-massage",
        title: "Full Body Therapeutic Massage",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
        description:
          "A comprehensive full-body session blending multiple techniques for total relaxation and tension relief.",
        price: 95,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. PHOTOGRAPHY
  // ─────────────────────────────────────────────────────────────
  {
    id: "solo-photoshoot-london-guided-natural",
    title: "Solo Photoshoot Lahore - Guided & Natural",
    category: "Photography",
    tagline:
      "A relaxed, guided photoshoot around Lahore's most iconic backdrops, capturing natural, confident portraits.",
    heroImage:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200&q=80",
    rating: 4.92,
    reviewCount: 340,
    priceFrom: 116,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Lahore",
      area: "DHA Phase 5",
      postcode: "54792",
      country: "Pakistan",
      providedAt: "Meet at iconic Lahore landmark",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-charlotte",
      name: "Charlotte",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      title: "Photographer in DHA Phase 5",
      experienceYears: 8,
      experienceSummary:
        "I specialize in candid, editorial-style portraits across Lahore's most photogenic streets.",
      careerHighlight:
        "Work featured in three Lahore lifestyle publications.",
      education: "BA Photography, Central Saint Martins.",
    },
    guestRequirements: { minAge: 12, maxGuests: 6 },
    reviews: [],
    subServices: [
      {
        id: "iconic-london-portrait-walk",
        title: "Iconic Lahore Portrait Walk",
        image:
          "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
        description:
          "A guided walking photoshoot through iconic Lahore streets and landmarks, capturing natural, editorial-style portraits.",
        price: 116,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "golden-hour-riverside-shoot",
        title: "Golden Hour Riverside Shoot",
        image:
          "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
        description:
          "A sunset session along the Thames, using natural golden-hour light for warm, cinematic portraits.",
        price: 145,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "family-group-photoshoot",
        title: "Family & Group Photoshoot",
        image:
          "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&q=80",
        description:
          "A relaxed session designed for families or friend groups, capturing authentic candid moments together.",
        price: 210,
        priceUnit: "group",
        duration: "1 hr 30 mins",
      },
      {
        id: "professional-headshot-session",
        title: "Professional Headshot Session",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
        description:
          "Clean, professional headshots suitable for LinkedIn, corporate profiles, and personal branding.",
        price: 130,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "fashion-editorial-shoot",
        title: "Fashion Editorial Shoot",
        image:
          "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=600&q=80",
        description:
          "A styled editorial shoot with wardrobe changes and creative direction, ideal for portfolios or social media.",
        price: 260,
        priceUnit: "guest",
        duration: "2 hrs",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. COOKING / CULINARY
  // ─────────────────────────────────────────────────────────────
  {
    id: "seasonal-gourmet-menus-chef-anna-jane",
    title: "Seasonal gourmet menus by Chef Anna Jane",
    category: "Culinary",
    tagline:
      "A private in-home dining experience featuring seasonal, locally-sourced gourmet menus crafted and served by Chef Anna Jane.",
    heroImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    rating: 5.0,
    reviewCount: 89,
    priceFrom: 135,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Islamabad",
      area: "F-7",
      postcode: "44020",
      country: "Pakistan",
      providedAt: "Guest's or chef's kitchen",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-anna-jane",
      name: "Anna Jane",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      title: "Private chef in F-7, Islamabad",
      experienceYears: 15,
      experienceSummary:
        "Formally trained chef offering bespoke seasonal tasting menus for private clients across Islamabad.",
      careerHighlight:
        "Former sous chef at a Michelin-starred Islamabad restaurant.",
      education: "Le Cordon Bleu Culinary Diploma.",
    },
    guestRequirements: { minAge: 0, maxGuests: 10 },
    reviews: [],
    subServices: [
      {
        id: "seasonal-tasting-menu-dinner",
        title: "Seasonal Tasting Menu Dinner",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        description:
          "A multi-course tasting menu built around the season's best local produce, cooked and plated in your home.",
        price: 135,
        priceUnit: "guest",
        duration: "2 hrs",
      },
      {
        id: "italian-pasta-making-class",
        title: "Italian Pasta-Making Class",
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
        description:
          "A hands-on class where you'll learn to make fresh pasta from scratch, followed by a shared meal.",
        price: 98,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "sunday-roast-experience",
        title: "Sunday Roast Experience",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
        description:
          "A classic British Sunday roast, prepared fresh with all the trimmings and served family-style.",
        price: 110,
        priceUnit: "guest",
        duration: "2 hrs",
      },
      {
        id: "wine-pairing-dinner",
        title: "Wine Pairing Dinner",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        description:
          "A curated multi-course dinner with wines selected to complement each dish, guided by the chef.",
        price: 180,
        priceUnit: "guest",
        duration: "2 hrs 30 mins",
      },
      {
        id: "kids-friendly-cooking-party",
        title: "Kid-Friendly Cooking Party",
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
        description:
          "A fun, hands-on cooking session designed for children and families, ending with a meal everyone helped make.",
        price: 65,
        priceUnit: "guest",
        duration: "1 hr",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. PILATES
  // ─────────────────────────────────────────────────────────────
  {
    id: "core-strength-pilates-with-mia",
    title: "Core Strength Pilates with Mia",
    category: "Pilates",
    tagline:
      "Mat and reformer-inspired Pilates sessions focused on core control, posture, and long, lean strength.",
    heroImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    rating: 4.95,
    reviewCount: 47,
    priceFrom: 45,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Karachi",
      area: "DHA Phase 2",
      postcode: "75500",
      country: "Pakistan",
      providedAt: "Mia's private studio",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-mia",
      name: "Mia",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      title: "Pilates instructor in DHA Phase 2, Karachi",
      experienceYears: 6,
      experienceSummary:
        "I teach mat and equipment-based Pilates for posture, injury recovery, and core strength.",
      careerHighlight:
        "Former professional dancer; rehabilitated her own back injury through Pilates.",
      education: "STOTT Pilates Certification, Comprehensive Reformer Training.",
    },
    guestRequirements: { minAge: 14, maxGuests: 3 },
    reviews: [],
    subServices: [
      {
        id: "beginner-mat-pilates",
        title: "Beginner Mat Pilates",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
        description:
          "A gentle introduction to core Pilates principles — breath, alignment, and control — using just a mat.",
        price: 45,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "reformer-strength-session",
        title: "Reformer Strength Session",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
        description:
          "A full-body reformer workout building strength, flexibility, and control using spring resistance.",
        price: 68,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "posture-correction-pilates",
        title: "Posture Correction Pilates",
        image:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
        description:
          "Targeted exercises to correct rounded shoulders, anterior pelvic tilt, and other posture imbalances.",
        price: 55,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "prenatal-pilates",
        title: "Prenatal Pilates",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
        description:
          "A safe, supportive Pilates class designed for expecting mothers to build strength and ease common pregnancy discomforts.",
        price: 58,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "small-group-pilates-class",
        title: "Small Group Pilates Class",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
        description:
          "A energizing Pilates class for small friend groups, blending mat work with light resistance props.",
        price: 180,
        priceUnit: "group",
        duration: "1 hr",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. MEDITATION & MINDFULNESS
  // ─────────────────────────────────────────────────────────────
  {
    id: "mindful-moments-meditation-with-raj",
    title: "Mindful Moments Meditation with Raj",
    category: "Meditation",
    tagline:
      "Guided meditation and mindfulness sessions to calm the mind, reduce stress, and build a sustainable daily practice.",
    heroImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    rating: 4.97,
    reviewCount: 76,
    priceFrom: 35,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Rawalpindi",
      area: "Askari 10",
      postcode: "46020",
      country: "Pakistan",
      providedAt: "Askari 10 park or private studio",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-raj",
      name: "Raj",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80",
      title: "Meditation teacher in Askari 10, Rawalpindi",
      experienceYears: 10,
      experienceSummary:
        "I guide individuals and groups through mindfulness and meditation practices rooted in Vipassana tradition.",
      careerHighlight:
        "Studied under monks in Thailand for two years before teaching in Rawalpindi.",
      education: "Certified Mindfulness-Based Stress Reduction (MBSR) Instructor.",
    },
    guestRequirements: { minAge: 10, maxGuests: 8 },
    reviews: [],
    subServices: [
      {
        id: "guided-mindfulness-session",
        title: "Guided Mindfulness Session",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
        description:
          "A calming introduction to mindfulness meditation, focusing on breath awareness and present-moment attention.",
        price: 35,
        priceUnit: "guest",
        duration: "40 mins",
      },
      {
        id: "stress-relief-meditation",
        title: "Stress Relief Meditation",
        image:
          "https://images.unsplash.com/photo-1591343395902-1707517d41f7?w=600&q=80",
        description:
          "A deeply relaxing session combining body scan meditation and gentle breathing techniques to release stress.",
        price: 40,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "sound-bath-meditation",
        title: "Sound Bath Meditation",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
        description:
          "Immerse yourself in the healing vibrations of singing bowls and gongs for deep relaxation and mental clarity.",
        price: 60,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "walking-meditation-heath",
        title: "Walking Meditation in the Park",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
        description:
          "A guided mindful walk through Askari 10 park, using nature as an anchor for present-moment awareness.",
        price: 38,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "group-meditation-workshop",
        title: "Group Meditation Workshop",
        image:
          "https://images.unsplash.com/photo-1591343395902-1707517d41f7?w=600&q=80",
        description:
          "A workshop introducing several meditation techniques, ideal for teams or friend groups exploring mindfulness together.",
        price: 220,
        priceUnit: "group",
        duration: "1 hr 30 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. HAIR STYLING
  // ─────────────────────────────────────────────────────────────
  {
    id: "luxe-hair-studio-by-priya",
    title: "Luxe Hair Studio by Priya",
    category: "Hair",
    tagline:
      "Mobile and studio hairstyling for cuts, colour, and special-occasion styling, tailored to your hair type and vision.",
    heroImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    rating: 4.9,
    reviewCount: 158,
    priceFrom: 45,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Lahore",
      area: "Johar Town",
      postcode: "54782",
      country: "Pakistan",
      providedAt: "Priya's studio or your home",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: "Popular",
    provider: {
      id: "host-priya",
      name: "Priya",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      title: "Hairstylist in Johar Town, Lahore",
      experienceYears: 12,
      experienceSummary:
        "I specialize in precision cutting, balayage colour, and bridal styling for clients across Lahore.",
      careerHighlight:
        "Backstage stylist for Lahore Fashion Week three seasons running.",
      education: "Vidal Sassoon Advanced Academy Diploma.",
    },
    guestRequirements: { minAge: 8, maxGuests: 3 },
    reviews: [],
    subServices: [
      {
        id: "precision-cut-style",
        title: "Precision Cut & Style",
        image:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
        description:
          "A tailored haircut and blow-dry finish designed around your face shape, hair texture, and lifestyle.",
        price: 45,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "balayage-colour-treatment",
        title: "Balayage Colour Treatment",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
        description:
          "Hand-painted balayage highlights for a natural, sun-kissed colour gradient with low-maintenance regrowth.",
        price: 140,
        priceUnit: "guest",
        duration: "2 hrs 30 mins",
      },
      {
        id: "bridal-hair-trial",
        title: "Bridal Hair Trial",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
        description:
          "A one-on-one trial session to design and perfect your wedding-day hairstyle before the big day.",
        price: 95,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "blowout-event-styling",
        title: "Blowout & Event Styling",
        image:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
        description:
          "A glamorous blow-dry and styling session, perfect for parties, events, or a special night out.",
        price: 55,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "deep-conditioning-treatment",
        title: "Deep Conditioning Treatment",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
        description:
          "A restorative hair treatment to repair damage, boost shine, and improve overall hair health.",
        price: 50,
        priceUnit: "guest",
        duration: "40 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. MAKEUP ARTISTRY
  // ─────────────────────────────────────────────────────────────
  {
    id: "flawless-face-makeup-artistry-by-sofia",
    title: "Flawless Face Makeup Artistry by Sofia",
    category: "Makeup",
    tagline:
      "Professional makeup application for bridal, editorial, and everyday glam, using premium long-wear products.",
    heroImage:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80",
    rating: 4.96,
    reviewCount: 133,
    priceFrom: 70,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Islamabad",
      area: "E-11",
      postcode: "44220",
      country: "Pakistan",
      providedAt: "Sofia's studio or your home",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-sofia",
      name: "Sofia",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      title: "Makeup artist in E-11, Islamabad",
      experienceYears: 9,
      experienceSummary:
        "I create polished, camera-ready makeup looks for weddings, shoots, and special events.",
      careerHighlight:
        "Makeup artist for two Islamabad Fashion Week runway shows.",
      education: "MAC Pro Makeup Artistry Certification.",
    },
    guestRequirements: { minAge: 12, maxGuests: 4 },
    reviews: [],
    subServices: [
      {
        id: "everyday-glam-makeup",
        title: "Everyday Glam Makeup",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
        description:
          "A polished, natural-glam look suitable for work, dates, or a confidence boost on any day.",
        price: 70,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "bridal-makeup-trial",
        title: "Bridal Makeup Trial",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
        description:
          "A trial session to design your perfect wedding-day makeup look, refined until it's exactly right.",
        price: 110,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "special-event-makeup",
        title: "Special Event Makeup",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
        description:
          "Bold, long-wear makeup application designed for parties, galas, and photographed occasions.",
        price: 85,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "makeup-masterclass",
        title: "Makeup Masterclass",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
        description:
          "A one-on-one lesson teaching you techniques to recreate a flawless everyday or glam look yourself.",
        price: 120,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "group-glam-party",
        title: "Group Glam Party",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
        description:
          "Makeup application for you and your friends before a big night out or celebration.",
        price: 280,
        priceUnit: "group",
        duration: "2 hrs",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. NAIL CARE
  // ─────────────────────────────────────────────────────────────
  {
    id: "polished-nails-studio-by-lena",
    title: "Polished Nails Studio by Lena",
    category: "Nail Care",
    tagline:
      "Precision manicures, pedicures, and nail art delivered in a clean, relaxing studio setting.",
    heroImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80",
    rating: 4.93,
    reviewCount: 201,
    priceFrom: 30,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Karachi",
      area: "Gulshan-e-Iqbal",
      postcode: "75300",
      country: "Pakistan",
      providedAt: "Lena's nail studio",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-lena",
      name: "Lena",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      title: "Nail technician in Gulshan-e-Iqbal, Karachi",
      experienceYears: 5,
      experienceSummary:
        "I offer detailed manicure, pedicure, and nail art services using hygienic, high-quality tools and products.",
      careerHighlight:
        "Trained at a leading Karachi nail academy; specializes in gel and hand-painted art.",
      education: "City & Guilds Nail Technology Diploma.",
    },
    guestRequirements: { minAge: 10, maxGuests: 4 },
    reviews: [],
    subServices: [
      {
        id: "classic-gel-manicure",
        title: "Classic Gel Manicure",
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        description:
          "A long-lasting gel manicure with shape, cuticle care, and your choice of polish colour.",
        price: 30,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "spa-pedicure",
        title: "Spa Pedicure",
        image:
          "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
        description:
          "A relaxing pedicure including foot soak, exfoliation, massage, and polish for soft, refreshed feet.",
        price: 40,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "hand-painted-nail-art",
        title: "Hand-Painted Nail Art",
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        description:
          "Custom hand-painted nail art designs, from minimal accents to detailed statement pieces.",
        price: 55,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "bio-sculpture-overlay",
        title: "Bio Sculpture Overlay",
        image:
          "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
        description:
          "A strengthening gel overlay that protects natural nails while giving a smooth, glossy finish.",
        price: 48,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "bridal-party-nail-package",
        title: "Bridal Party Nail Package",
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
        description:
          "Manicures for the bride and her party, coordinated in complementary tones for the big day.",
        price: 260,
        priceUnit: "group",
        duration: "2 hrs 30 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. LIFE COACHING
  // ─────────────────────────────────────────────────────────────
  {
    id: "clarity-life-coaching-with-marcus",
    title: "Clarity Life Coaching with Marcus",
    category: "Life Coaching",
    tagline:
      "One-on-one coaching to help you clarify your goals, break through blocks, and build sustainable habits for growth.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    rating: 4.99,
    reviewCount: 58,
    priceFrom: 80,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Rawalpindi",
      area: "Chaklala Scheme 3",
      postcode: "46300",
      country: "Pakistan",
      providedAt: "Marcus's office or online",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-marcus",
      name: "Marcus",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      title: "Life coach in Chaklala Scheme 3, Rawalpindi",
      experienceYears: 11,
      experienceSummary:
        "I help driven professionals gain clarity on career, relationships, and personal growth through structured coaching.",
      careerHighlight:
        "Former management consultant; coached over 400 clients since transitioning to coaching.",
      education: "ICF-Certified Professional Coach (PCC).",
    },
    guestRequirements: { minAge: 18, maxGuests: 1 },
    reviews: [],
    subServices: [
      {
        id: "goal-clarity-session",
        title: "Goal Clarity Session",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
        description:
          "A focused session to define what you actually want and map out a realistic path to get there.",
        price: 80,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "career-transition-coaching",
        title: "Career Transition Coaching",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        description:
          "Guidance through a career change or pivot, covering mindset, strategy, and practical next steps.",
        price: 95,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "habit-building-blueprint",
        title: "Habit-Building Blueprint",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
        description:
          "A practical session to design sustainable daily habits aligned with your bigger goals.",
        price: 75,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "confidence-mindset-coaching",
        title: "Confidence & Mindset Coaching",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
        description:
          "Work through limiting beliefs and self-doubt to build lasting confidence in work and life.",
        price: 85,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "quarterly-planning-intensive",
        title: "Quarterly Planning Intensive",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
        description:
          "A deep-dive session to plan out your next quarter across career, health, and personal priorities.",
        price: 150,
        priceUnit: "guest",
        duration: "2 hrs",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 13. MUSIC LESSONS
  // ─────────────────────────────────────────────────────────────
  {
    id: "private-music-lessons-with-oliver",
    title: "Private Music Lessons with Oliver",
    category: "Music",
    tagline:
      "Personalized piano, guitar, and vocal lessons for beginners to advanced students, at your home or Oliver's studio.",
    heroImage:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&q=80",
    rating: 4.94,
    reviewCount: 92,
    priceFrom: 40,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Lahore",
      area: "Model Town",
      postcode: "54700",
      country: "Pakistan",
      providedAt: "Oliver's studio or your home",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-oliver",
      name: "Oliver",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80",
      title: "Music teacher in Model Town, Lahore",
      experienceYears: 13,
      experienceSummary:
        "I teach piano, guitar, and vocal technique to students of all ages and levels.",
      careerHighlight:
        "Graduate of the Royal Academy of Music; former session musician.",
      education: "BMus, Royal Academy of Music.",
    },
    guestRequirements: { minAge: 5, maxGuests: 2 },
    reviews: [],
    subServices: [
      {
        id: "beginner-piano-lesson",
        title: "Beginner Piano Lesson",
        image:
          "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
        description:
          "A friendly introduction to piano fundamentals — reading music, hand position, and your first simple pieces.",
        price: 40,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "acoustic-guitar-lesson",
        title: "Acoustic Guitar Lesson",
        image:
          "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80",
        description:
          "Learn chords, strumming patterns, and your favourite songs on acoustic guitar at any skill level.",
        price: 40,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "vocal-coaching-session",
        title: "Vocal Coaching Session",
        image:
          "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
        description:
          "Technique-focused vocal coaching covering breath support, pitch control, and performance confidence.",
        price: 50,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "music-theory-crash-course",
        title: "Music Theory Crash Course",
        image:
          "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80",
        description:
          "A focused session breaking down scales, chords, and rhythm so you can read and understand music with confidence.",
        price: 45,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "songwriting-workshop",
        title: "Songwriting Workshop",
        image:
          "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
        description:
          "Collaborate on writing an original song, covering lyric writing, melody, and basic arrangement.",
        price: 65,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 14. ART CLASSES
  // ─────────────────────────────────────────────────────────────
  {
    id: "creative-canvas-art-classes-with-isla",
    title: "Creative Canvas Art Classes with Isla",
    category: "Art",
    tagline:
      "Relaxed painting and drawing classes for all skill levels, exploring watercolour, acrylic, and sketching techniques.",
    heroImage:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80",
    rating: 4.91,
    reviewCount: 66,
    priceFrom: 42,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Islamabad",
      area: "G-9",
      postcode: "44080",
      country: "Pakistan",
      providedAt: "Isla's art studio",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-isla",
      name: "Isla",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      title: "Art teacher in G-9, Islamabad",
      experienceYears: 8,
      experienceSummary:
        "I run relaxed studio classes exploring painting, sketching, and mixed media for all experience levels.",
      careerHighlight:
        "Exhibited work in two independent Islamabad galleries.",
      education: "BA Fine Art, Camberwell College of Arts.",
    },
    guestRequirements: { minAge: 6, maxGuests: 8 },
    reviews: [],
    subServices: [
      {
        id: "watercolour-basics-class",
        title: "Watercolour Basics Class",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
        description:
          "Learn foundational watercolour techniques — washes, blending, and colour mixing — while painting a simple scene.",
        price: 42,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "acrylic-painting-session",
        title: "Acrylic Painting Session",
        image:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
        description:
          "A guided acrylic painting session where you'll create your own canvas artwork to take home.",
        price: 50,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "sketching-in-the-park",
        title: "Sketching in the Park",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
        description:
          "An outdoor sketching session focused on observational drawing, shading, and perspective in nature.",
        price: 35,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "wine-and-canvas-night",
        title: "Wine & Canvas Night",
        image:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
        description:
          "A fun, social painting class paired with a glass of wine — no experience necessary.",
        price: 55,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "kids-art-party",
        title: "Kids' Art Party",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
        description:
          "A colourful, hands-on art party for children, guided through a fun project they'll be proud to keep.",
        price: 220,
        priceUnit: "group",
        duration: "1 hr 30 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 15. DANCE LESSONS
  // ─────────────────────────────────────────────────────────────
  {
    id: "rhythm-motion-dance-lessons-with-carlos",
    title: "Rhythm & Motion Dance Lessons with Carlos",
    category: "Dance",
    tagline:
      "Private and group dance lessons spanning salsa, ballroom, and contemporary styles for every skill level.",
    heroImage:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&q=80",
    rating: 4.96,
    reviewCount: 104,
    priceFrom: 50,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Karachi",
      area: "Bahadurabad",
      postcode: "74800",
      country: "Pakistan",
      providedAt: "Carlos's dance studio",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: "Popular",
    provider: {
      id: "host-carlos",
      name: "Carlos",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80",
      title: "Dance instructor in Bahadurabad, Karachi",
      experienceYears: 10,
      experienceSummary:
        "I teach salsa, bachata, and ballroom to couples, singles, and complete beginners.",
      careerHighlight:
        "Former competitive Latin dancer; toured with a professional dance company.",
      education: "Certified Ballroom & Latin Dance Instructor (IDTA).",
    },
    guestRequirements: { minAge: 8, maxGuests: 10 },
    reviews: [],
    subServices: [
      {
        id: "salsa-fundamentals-class",
        title: "Salsa Fundamentals Class",
        image:
          "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80",
        description:
          "Learn the basic steps, turns, and timing of salsa in a fun, supportive beginner-friendly session.",
        price: 50,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "wedding-first-dance-coaching",
        title: "Wedding First Dance Coaching",
        image:
          "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?w=600&q=80",
        description:
          "Private coaching to choreograph and perfect your first dance as a couple for your wedding day.",
        price: 90,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "ballroom-basics-for-two",
        title: "Ballroom Basics for Two",
        image:
          "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80",
        description:
          "An elegant introduction to waltz and foxtrot fundamentals, designed for couples or dance partners.",
        price: 95,
        priceUnit: "group",
        duration: "1 hr",
      },
      {
        id: "contemporary-movement-class",
        title: "Contemporary Movement Class",
        image:
          "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?w=600&q=80",
        description:
          "Explore expressive, flowing contemporary dance technique in a welcoming studio environment.",
        price: 55,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "group-bachata-party",
        title: "Group Bachata Party",
        image:
          "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80",
        description:
          "A lively group bachata session, perfect for birthdays, hen parties, or a fun night with friends.",
        price: 300,
        priceUnit: "group",
        duration: "1 hr 30 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 16. PERSONAL STYLING
  // ─────────────────────────────────────────────────────────────
  {
    id: "signature-style-personal-styling-with-freya",
    title: "Signature Style Personal Styling with Freya",
    category: "Styling",
    tagline:
      "Wardrobe edits, personal shopping, and styling sessions to help you dress with confidence and clarity.",
    heroImage:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&q=80",
    rating: 4.9,
    reviewCount: 51,
    priceFrom: 90,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Rawalpindi",
      area: "Satellite Town",
      postcode: "46300",
      country: "Pakistan",
      providedAt: "Your home or select boutiques",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-freya",
      name: "Freya",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      title: "Personal stylist in Satellite Town, Rawalpindi",
      experienceYears: 7,
      experienceSummary:
        "I help clients build versatile, confidence-boosting wardrobes through edits, styling, and personal shopping.",
      careerHighlight:
        "Former fashion buyer for a leading Rawalpindi department store.",
      education: "BA Fashion Styling, Rawalpindi College of Fashion.",
    },
    guestRequirements: { minAge: 16, maxGuests: 2 },
    reviews: [],
    subServices: [
      {
        id: "wardrobe-edit-session",
        title: "Wardrobe Edit Session",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
        description:
          "A full closet review to identify what works, what doesn't, and how to build outfits from what you own.",
        price: 90,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "personal-shopping-trip",
        title: "Personal Shopping Trip",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
        description:
          "A guided shopping session to find pieces that fit your body, budget, and personal style goals.",
        price: 130,
        priceUnit: "guest",
        duration: "2 hrs",
      },
      {
        id: "capsule-wardrobe-planning",
        title: "Capsule Wardrobe Planning",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
        description:
          "Build a versatile, mix-and-match capsule wardrobe tailored to your lifestyle and colour palette.",
        price: 110,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "interview-event-styling",
        title: "Interview & Event Styling",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
        description:
          "Outfit styling for a big interview, event, or milestone occasion, ensuring you look and feel your best.",
        price: 85,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "colour-analysis-consultation",
        title: "Colour Analysis Consultation",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
        description:
          "Discover your most flattering colour palette to simplify shopping and elevate every outfit.",
        price: 75,
        priceUnit: "guest",
        duration: "1 hr",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 17. TAROT & ASTROLOGY
  // ─────────────────────────────────────────────────────────────
  {
    id: "celestial-insights-tarot-astrology-with-luna",
    title: "Celestial Insights Tarot & Astrology with Luna",
    category: "Tarot & Astrology",
    tagline:
      "Intuitive tarot readings and natal chart consultations to explore self-reflection, timing, and life direction.",
    heroImage:
      "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=1200&q=80",
    rating: 4.88,
    reviewCount: 39,
    priceFrom: 55,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Lahore",
      area: "Cavalry Ground",
      postcode: "54810",
      country: "Pakistan",
      providedAt: "Luna's reading room",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-luna",
      name: "Luna",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      title: "Tarot reader & astrologer in Cavalry Ground, Lahore",
      experienceYears: 9,
      experienceSummary:
        "I offer intuitive tarot readings and natal chart consultations for reflection, clarity, and guidance.",
      careerHighlight:
        "Self-taught practitioner with a decade of client readings across Lahore.",
      education: "Diploma in Astrological Studies, independent tarot apprenticeship.",
    },
    guestRequirements: { minAge: 16, maxGuests: 2 },
    reviews: [],
    subServices: [
      {
        id: "general-tarot-reading",
        title: "General Tarot Reading",
        image:
          "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=600&q=80",
        description:
          "An intuitive tarot reading covering love, career, and personal growth, offering reflection and guidance.",
        price: 55,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "natal-chart-consultation",
        title: "Natal Chart Consultation",
        image:
          "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
        description:
          "A deep-dive into your birth chart, exploring personality traits, strengths, and life themes.",
        price: 75,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "love-relationship-reading",
        title: "Love & Relationship Reading",
        image:
          "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=600&q=80",
        description:
          "A focused tarot reading exploring current or potential relationships and emotional patterns.",
        price: 60,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "yearly-forecast-reading",
        title: "Yearly Forecast Reading",
        image:
          "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
        description:
          "A combined tarot and astrology session mapping key themes and turning points for the year ahead.",
        price: 95,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "friends-tarot-circle",
        title: "Friends' Tarot Circle",
        image:
          "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=600&q=80",
        description:
          "A relaxed group session with individual mini-readings for each friend, plus shared discussion.",
        price: 210,
        priceUnit: "group",
        duration: "1 hr 30 mins",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 18. LANGUAGE TUTORING
  // ─────────────────────────────────────────────────────────────
  {
    id: "fluent-fast-language-tutoring-with-elena",
    title: "Fluent Fast Language Tutoring with Elena",
    category: "Language Tutoring",
    tagline:
      "Conversational and structured language lessons in Spanish, French, and Italian, tailored to your goals and pace.",
    heroImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
    rating: 4.95,
    reviewCount: 84,
    priceFrom: 35,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Islamabad",
      area: "Bahria Town",
      postcode: "44500",
      country: "Pakistan",
      providedAt: "Elena's home studio or online",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-elena",
      name: "Elena",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      title: "Language tutor in Bahria Town, Islamabad",
      experienceYears: 8,
      experienceSummary:
        "I teach Spanish, French, and Italian through conversation-focused lessons for learners of all levels.",
      careerHighlight:
        "Former language teacher at an Islamabad international school.",
      education: "MA Modern Languages, University College Islamabad.",
    },
    guestRequirements: { minAge: 8, maxGuests: 4 },
    reviews: [],
    subServices: [
      {
        id: "beginner-conversation-spanish",
        title: "Beginner Conversation Spanish",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
        description:
          "A friendly introduction to spoken Spanish, focused on everyday phrases and building confidence quickly.",
        price: 35,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "intermediate-french-practice",
        title: "Intermediate French Practice",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
        description:
          "Structured conversation practice to build fluency, grammar accuracy, and vocabulary in French.",
        price: 38,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "italian-for-travel",
        title: "Italian for Travel",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
        description:
          "Practical, travel-focused Italian lessons covering ordering food, directions, and everyday interactions.",
        price: 36,
        priceUnit: "guest",
        duration: "45 mins",
      },
      {
        id: "business-language-coaching",
        title: "Business Language Coaching",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
        description:
          "Professional vocabulary and communication coaching for meetings, emails, and workplace conversations.",
        price: 55,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "exam-prep-tutoring",
        title: "Exam Prep Tutoring",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
        description:
          "Focused tutoring to prepare for language proficiency exams, covering reading, writing, and speaking sections.",
        price: 45,
        priceUnit: "guest",
        duration: "1 hr",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 19. HOME ORGANIZING
  // ─────────────────────────────────────────────────────────────
  {
    id: "tidy-spaces-home-organizing-with-grace",
    title: "Tidy Spaces Home Organizing with Grace",
    category: "Home Organizing",
    tagline:
      "Practical, judgment-free home organizing to declutter, systemize, and create calm, functional spaces.",
    heroImage:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
    rating: 4.97,
    reviewCount: 71,
    priceFrom 
: 65,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Karachi",
      area: "PECHS",
      postcode: "75400",
      country: "Pakistan",
      providedAt: "Your home",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: null,
    provider: {
      id: "host-grace",
      name: "Grace",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      title: "Professional organizer in PECHS, Karachi",
      experienceYears: 6,
      experienceSummary:
        "I help clients declutter and organize kitchens, closets, and home offices into calm, functional spaces.",
      careerHighlight:
        "Featured organizer on a Pakistani home & lifestyle podcast.",
      education: "Certified Professional Organizer (APDO member).",
    },
    guestRequirements: { minAge: 18, maxGuests: 1 },
    reviews: [],
    subServices: [
      {
        id: "closet-declutter-session",
        title: "Closet Declutter Session",
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
        description:
          "A hands-on session to sort, declutter, and reorganize your wardrobe into an efficient, easy-to-use system.",
        price: 65,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "kitchen-pantry-organization",
        title: "Kitchen & Pantry Organization",
        image:
          "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80",
        description:
          "Reorganize cabinets and pantry shelves for easier cooking, better storage, and less food waste.",
        price: 80,
        priceUnit: "guest",
        duration: "2 hrs",
      },
      {
        id: "home-office-setup",
        title: "Home Office Setup",
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
        description:
          "Create a functional, distraction-free home office with smart storage and paperwork systems.",
        price: 90,
        priceUnit: "guest",
        duration: "2 hrs",
      },
      {
        id: "moving-day-unpacking",
        title: "Moving Day Unpacking",
        image:
          "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80",
        description:
          "Get settled fast with help unpacking boxes and organizing your new home room by room.",
        price: 120,
        priceUnit: "guest",
        duration: "3 hrs",
      },
      {
        id: "seasonal-declutter-refresh",
        title: "Seasonal Declutter Refresh",
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
        description:
          "A whole-home refresh to clear out clutter and reset organizational systems for the season ahead.",
        price: 150,
        priceUnit: "guest",
        duration: "3 hrs",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 20. FLORISTRY / FLOWER ARRANGING
  // ─────────────────────────────────────────────────────────────
  {
    id: "bloom-bouquet-floristry-with-poppy",
    title: "Bloom & Bouquet Floristry with Poppy",
    category: "Floristry",
    tagline:
      "Hands-on flower arranging workshops and bespoke bouquet-making sessions using seasonal, locally-sourced blooms.",
    heroImage:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
    rating: 4.98,
    reviewCount: 118,
    priceFrom: 48,
    currency: "USD",
    priceUnit: "guest",
    location: {
      city: "Rawalpindi",
      area: "Westridge",
      postcode: "46000",
      country: "Pakistan",
      providedAt: "Poppy's flower studio",
    },
    cancellationPolicy: "Free cancellation · Up to 1 day before start time",
    badge: "Popular",
    provider: {
      id: "host-poppy",
      name: "Poppy",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
      title: "Florist in Westridge, Rawalpindi",
      experienceYears: 9,
      experienceSummary:
        "I run hands-on floristry workshops using fresh, seasonal blooms sourced from local growers.",
      careerHighlight:
        "Floral designer for two Rawalpindi Fashion Week installations.",
      education: "City & Guilds Floristry Diploma.",
    },
    guestRequirements: { minAge: 8, maxGuests: 10 },
    reviews: [],
    subServices: [
      {
        id: "seasonal-bouquet-workshop",
        title: "Seasonal Bouquet Workshop",
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
        description:
          "Learn to arrange a beautiful hand-tied bouquet using the season's freshest flowers and foliage.",
        price: 48,
        priceUnit: "guest",
        duration: "1 hr 15 mins",
      },
      {
        id: "wedding-centerpiece-class",
        title: "Wedding Centerpiece Class",
        image:
          "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=600&q=80",
        description:
          "A guided class to design elegant table centerpieces suited to your wedding colour palette.",
        price: 85,
        priceUnit: "guest",
        duration: "1 hr 30 mins",
      },
      {
        id: "dried-flower-wreath-making",
        title: "Dried Flower Wreath Making",
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
        description:
          "Create a long-lasting dried flower wreath to take home, using textured seasonal botanicals.",
        price: 60,
        priceUnit: "guest",
        duration: "1 hr",
      },
      {
        id: "flower-crown-workshop",
        title: "Flower Crown Workshop",
        image:
          "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=600&q=80",
        description:
          "A fun, whimsical session making your own fresh flower crown — perfect for celebrations and photos.",
        price: 45,
        priceUnit: "guest",
        duration: "50 mins",
      },
      {
        id: "hen-party-flower-workshop",
        title: "Hen Party Flower Workshop",
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
        description:
          "A celebratory group floristry session where everyone makes their own bouquet, complete with bubbly.",
        price: 380,
        priceUnit: "group",
        duration: "1 hr 30 mins",
      },
    ],
  },
];

export default services;