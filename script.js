// JavaScript for fixed navigation on scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".main-header").addClass("fixed-nav");
  } else {
    $(".main-header").removeClass("fixed-nav");
  }
});

// Toggle navbar on mobile
$(".navbar-toggler").on("click", function () {
  $(this).toggleClass("current");
});

// Card data for expanded view
const cardData = {
  1: {
    title: "Role Management",
    subtitle: "Multi-Tenant",
    icon: "fas fa-robot",
    color: "#4F46E5",
    content: "Astrix AI Agent provides comprehensive multi-tenant architecture designed for scalable business operations. Organizations can sign up for premium accounts with unlimited AI agents, advanced analytics, priority support, and enterprise-grade security features. Individual clients receive starter packages with 3-4 agents, essential tools, and standard support. Our flexible pricing tiers ensure that businesses of all sizes can leverage AI automation while maintaining strict data isolation, role-based permissions, and customizable access controls across different organizational levels."
  },
  2: {
    title: "Agent Management",
    subtitle: "Custom",
    icon: "fas fa-brain",
    color: "#8B5CF6",
    content: "Create and customize AI agents with unique personas tailored to your specific business needs. Our advanced agent management system allows you to define personality traits, communication styles, expertise domains, and behavioral patterns for each AI agent. Configure response tones, knowledge bases, decision-making frameworks, and interaction protocols. Whether you need a formal customer service agent, a creative marketing assistant, or a technical support specialist, our platform enables you to craft the perfect AI persona that aligns with your brand voice and operational requirements."
  },
  3: {
    title: "Matrix Confirmation",
    subtitle: "Real-time",
    icon: "fas fa-network-wired",
    color: "#06B6D4",
    content: "Monitor your AI operations with real-time performance matrices and intelligent error handling systems. Our comprehensive dashboard provides live metrics on agent performance, response times, success rates, and system health indicators. Advanced error detection automatically identifies issues, implements retry logic, and provides detailed diagnostic information. Get instant notifications for critical events, track operational efficiency, and maintain optimal system performance with our proactive monitoring and automated recovery mechanisms that ensure maximum uptime and reliability."
  },
  4: {
    title: "Unify Info",
    subtitle: "Data",
    icon: "fas fa-sitemap",
    color: "#F59E0B",
    content: "Transform fragmented business data into unified intelligence that drives competitive advantage. Our centralized information architecture eliminates data silos, reducing operational costs by up to 40% while increasing decision-making speed by 300%. By consolidating customer interactions, business processes, and operational metrics into a single intelligent hub, organizations achieve unprecedented visibility and control. This unified approach represents a $2.3 trillion market opportunity in enterprise data management, positioning Astrix AI Agent as the definitive solution for data-driven business transformation."
  },
  5: {
    title: "CRM Contact",
    subtitle: "Customer",
    icon: "fas fa-users",
    color: "#10B981",
    content: "Revolutionize customer relationship management with AI-powered contact intelligence that increases conversion rates by 250% and customer lifetime value by 180%. Our advanced CRM system automatically tracks, analyzes, and optimizes every customer touchpoint, providing predictive insights that enable proactive relationship management. With the global CRM market projected to reach $145 billion by 2029, our intelligent contact management solution captures significant market share by delivering measurable ROI through enhanced customer acquisition, retention, and expansion strategies."
  },
  6: {
    title: "Calendar Booking",
    subtitle: "Schedule",
    icon: "fas fa-calendar-alt",
    color: "#EF4444",
    content: "Capture the $4.8 billion scheduling software market with intelligent calendar automation that eliminates booking friction and increases meeting conversion rates by 400%. Our smart scheduling system optimizes availability, reduces no-shows by 60%, and automatically handles time zones, preferences, and conflicts. By streamlining the booking process, businesses report 35% faster sales cycles and 50% improved customer satisfaction. This represents a critical competitive advantage in today's fast-paced business environment where time-to-engagement directly correlates with revenue generation."
  },
  7: {
    title: "Call Automation",
    subtitle: "Comms",
    icon: "fas fa-phone-alt",
    color: "#6366F1",
    content: "Dominate the $47 billion business communications market with omnichannel automation that handles SMS, email, and voice interactions at enterprise scale. Our intelligent communication platform reduces response times by 90%, increases engagement rates by 320%, and cuts operational costs by 65%. With businesses spending over $1.2 trillion annually on customer communications, our automation solution delivers immediate ROI while scaling infinitely. This technology positions us to capture significant market share in the rapidly expanding conversational AI sector, projected to reach $32 billion by 2030."
  },
  8: {
    title: "Call Logs",
    subtitle: "Records",
    icon: "fas fa-microphone",
    color: "#EC4899",
    content: "Transform voice interactions into actionable business intelligence with AI-powered call analysis that extracts insights worth millions in revenue optimization. Our advanced logging system automatically generates summaries, identifies key topics, tracks sentiment, and provides compliance documentation. Companies using our call intelligence report 45% improvement in sales performance and 60% reduction in training costs. With the global speech analytics market growing at 15% CAGR to reach $11.9 billion by 2030, this feature positions us at the forefront of conversational intelligence innovation."
  },
  9: {
    title: "Session Memory",
    subtitle: "Context",
    icon: "fas fa-memory",
    color: "#14B8A6",
    content: "Deliver personalized experiences that increase customer satisfaction by 280% through intelligent context retention across 10+ interactions. Our session memory technology ensures seamless continuity, eliminating repetitive conversations and creating premium user experiences that command higher pricing. Studies show that contextual AI interactions generate 3.5x more revenue per customer and reduce churn by 40%. This capability differentiates us in the $126 billion customer experience market, enabling subscription models with 90%+ retention rates and premium pricing strategies."
  },
  10: {
    title: "Tone Detection",
    subtitle: "Emotion",
    icon: "fas fa-smile",
    color: "#F59E0B",
    content: "Capture the $56 billion emotion AI market with adaptive response technology that increases customer satisfaction scores by 200% and reduces escalation rates by 70%. Our sophisticated tone detection analyzes emotional cues in real-time, enabling AI agents to adjust communication style, urgency, and approach dynamically. This emotional intelligence capability drives 40% higher conversion rates and 85% improvement in customer retention. As businesses increasingly prioritize empathetic customer interactions, our tone detection technology provides a sustainable competitive moat in the rapidly growing affective computing sector."
  },
  11: {
    title: "API Analytics",
    subtitle: "Metrics",
    icon: "fas fa-chart-bar",
    color: "#8B5CF6",
    content: "Achieve complete cost transparency and operational excellence with comprehensive API analytics that reduce infrastructure spending by 45% while optimizing performance. Our intelligent monitoring provides real-time usage insights, predictive cost modeling, and automated optimization recommendations. Companies using our analytics platform report 60% reduction in API costs and 200% improvement in system efficiency. With the global API management market reaching $24.5 billion by 2030, our transparent analytics solution positions clients for sustainable growth while maximizing ROI on technology investments."
  },
  12: {
    title: "Audio Playback",
    subtitle: "Media",
    icon: "fas fa-play",
    color: "#10B981",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  13: {
    title: "Frontend Dashboard",
    subtitle: "Admin",
    icon: "fas fa-tachometer-alt",
    color: "#64748B",
    content: "Command enterprise operations with an intuitive performance matrix dashboard that increases management efficiency by 400% and reduces decision-making time by 75%. Our comprehensive admin interface provides real-time visibility into all system metrics, user activities, and business KPIs through customizable, role-based dashboards. Organizations report 50% improvement in operational oversight and 90% faster issue resolution. This executive-grade interface positions us in the $8.2 billion business intelligence dashboard market, delivering enterprise value through actionable insights and streamlined management workflows."
  },
  14: {
    title: "Integration Automation",
    subtitle: "Connect",
    icon: "fas fa-plug",
    color: "#84CC16",
    content: "Eliminate integration complexity with seamless calendar provider automation that reduces setup time by 95% and increases booking efficiency by 350%. Our intelligent connection framework automatically syncs with Google, Outlook, Apple, and 50+ calendar platforms, creating unified scheduling experiences that drive customer satisfaction. With businesses losing $62 billion annually to scheduling inefficiencies, our integration solution captures significant market opportunity while delivering immediate ROI through streamlined operations and enhanced user experiences across all major calendar ecosystems."
  },
  15: {
    title: "Security Compliance",
    subtitle: "Privacy",
    icon: "fas fa-shield-alt",
    color: "#F43F5E",
    content: "Secure enterprise trust and unlock global markets with comprehensive GDPR and CCPA compliance that reduces legal risk by 99% and accelerates international expansion. Our privacy-first architecture ensures data protection compliance across 50+ jurisdictions, enabling businesses to operate confidently in regulated markets. With data privacy violations costing companies an average of $4.45 million per breach, our compliance framework provides essential protection while opening access to the $180 billion global data protection market, positioning clients for secure, scalable growth."
  },
  16: {
    title: "Error Handling",
    subtitle: "Reliability",
    icon: "fas fa-exclamation-triangle",
    color: "#F59E0B",
    content: "Achieve 99.9% system reliability with intelligent error handling that prevents 95% of potential failures and reduces downtime costs by $2.3 million annually per enterprise client. Our smart retry logic and predictive failure detection ensure seamless operations while automatically resolving issues before they impact users. With system downtime costing businesses up to $5,600 per minute, our reliability framework provides critical competitive advantage while capturing significant value in the $45 billion IT resilience market through proactive error prevention and automated recovery."
  },
  17: {
    title: "Custom Branding",
    subtitle: "Brand",
    icon: "fas fa-palette",
    color: "#0EA5E9",
    content: "Maximize brand value and client retention with personalized talent themes that increase brand recognition by 400% and customer loyalty by 250%. Our custom branding platform enables complete visual and experiential customization, allowing businesses to maintain brand consistency across all AI interactions. Companies with strong brand consistency report 23% higher revenue growth. By capturing the $67 billion brand management market through personalized AI experiences, our branding solution drives premium pricing while creating deeper customer connections and sustainable competitive differentiation."
  },
  18: {
    title: "Support Docs",
    subtitle: "Help",
    icon: "fas fa-life-ring",
    color: "#78716C",
    content: "Reduce support costs by 85% while increasing customer satisfaction by 300% through comprehensive documentation and live chat integration. Our intelligent help system provides instant access to guides, tutorials, and real-time assistance, dramatically reducing ticket volume and resolution time. With businesses spending $1.3 trillion annually on customer support, our self-service platform delivers immediate cost savings while improving user experience. This positions us to capture significant market share in the $24 billion customer support software market through superior documentation and automated assistance capabilities."
  },
  19: {
    title: "Deploy Scale",
    subtitle: "Scale",
    icon: "fas fa-rocket",
    color: "#737373",
    content: "Achieve unlimited growth potential with horizontal scaling architecture that supports 10,000+ concurrent users while reducing infrastructure costs by 60%. Our cloud-native deployment automatically scales resources based on demand, ensuring optimal performance during peak usage while minimizing operational expenses. Enterprise clients report 500% faster deployment times and 90% reduction in scaling complexity. With the global cloud computing market reaching $1.6 trillion by 2030, our scalable infrastructure positions clients for exponential growth while capturing the expanding market for elastic, cost-effective computing solutions."
  }
};

// Interactive card functionality
$(document).ready(function() {
  // Create overlay element
  if (!$('.card-overlay').length) {
    $('body').append(`
      <div class="card-overlay">
        <div class="expanded-card">
          <button class="close-btn">&times;</button>
          <div class="expanded-card-left">
            <i class="expanded-card-icon"></i>
            <div class="expanded-card-title"></div>
            <div class="expanded-card-subtitle"></div>
          </div>
          <div class="expanded-card-right">
            <div class="expanded-card-content"></div>
          </div>
        </div>
      </div>
    `);
  }

  // Handle card clicks
  $('.canvas').on('click', function(e) {
    e.preventDefault();
    
    // Get card index (1-based)
    const cardIndex = $('.canvas').index(this) + 1;
    const data = cardData[cardIndex];
    
    if (data) {
      // Populate expanded card with data
      $('.expanded-card-icon')
        .removeClass()
        .addClass('expanded-card-icon ' + data.icon)
        .css('color', data.color);
      
      $('.expanded-card-title').text(data.title);
      $('.expanded-card-subtitle')
        .text(data.subtitle)
        .css('color', data.color);
      
      $('.expanded-card-content').text(data.content);
      
      // Set border color to match theme
      $('.expanded-card').css('border-color', data.color);
      
      // Show overlay with animation
      $('.card-overlay').addClass('active');
      
      // Prevent body scroll
      $('body').css('overflow', 'hidden');
    }
  });

  // Handle close button and overlay click
  $('.close-btn, .card-overlay').on('click', function(e) {
    if (e.target === this) {
      $('.card-overlay').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });

  // Handle escape key
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' && $('.card-overlay').hasClass('active')) {
      $('.card-overlay').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });
});
