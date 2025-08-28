/* ==========================================================================
   Feng Xu (Andy) - Personal Portfolio Website
   JavaScript Implementation
   ========================================================================== */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * 应用初始化函数
 */
function initializeApp() {
    // 初始化所有功能模块
    initializeNavigation();
    initializeScrollProgress();
    initializeCursorHalo();
    initializeFloatingButtons();
    initializeSkillTags();
    initializeProjectCards();
    initializeToolItems();
    initializeContactForm();
    initializeScrollReveal();
    
    // 设置当前年份
    updateCurrentYear();
}

/**
 * 导航功能初始化
 */
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });
        
        // 点击导航链接后关闭移动端菜单
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * 滚动进度条初始化
 */
function initializeScrollProgress() {
    const progressBar = document.getElementById('progress');
    
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
        });
    }
}

/**
 * 光标光晕效果初始化
 */
function initializeCursorHalo() {
    const cursorHalo = document.getElementById('cursorHalo');
    
    if (cursorHalo) {
        let isVisible = false;
        
        // 鼠标移动时更新光晕位置
        document.addEventListener('mousemove', (e) => {
            cursorHalo.style.left = e.clientX + 'px';
            cursorHalo.style.top = e.clientY + 'px';
            
            if (!isVisible) {
                cursorHalo.classList.add('active');
                isVisible = true;
            }
        });
        
        // 鼠标离开页面时隐藏光晕
        document.addEventListener('mouseleave', () => {
            cursorHalo.classList.remove('active');
            isVisible = false;
        });
        
        // 点击时增强光晕效果
        document.addEventListener('mousedown', () => {
            cursorHalo.style.transform = 'scale(1.5)';
        });
        
        document.addEventListener('mouseup', () => {
            cursorHalo.style.transform = 'scale(1)';
        });
    }
}

/**
 * 悬浮按钮初始化
 */
function initializeFloatingButtons() {
    const fabContainer = document.getElementById('fabContainer');
    const fabPrimary = document.getElementById('fabPrimary');
    const fabSecondary = document.getElementById('fabSecondary');
    
    if (fabContainer && fabPrimary && fabSecondary) {
        let scrollThreshold = 800;
        
        // 滚动时显示/隐藏悬浮按钮
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            
            if (scrollTop > scrollThreshold) {
                fabPrimary.classList.add('visible');
                fabSecondary.classList.add('visible');
            } else {
                fabPrimary.classList.remove('visible');
                fabSecondary.classList.remove('visible');
            }
        });
        
        // 回到顶部按钮
        fabPrimary.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 联系我按钮
        fabSecondary.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = contactSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

/**
 * 技能标签交互初始化
 */
function initializeSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        // 鼠标悬停时显示成就信息
        tag.addEventListener('mouseenter', function() {
            const achievement = this.getAttribute('data-achievement');
            if (achievement) {
                // 可以在这里添加更丰富的悬停效果
                this.style.transform = 'translateY(-4px) scale(1.05)';
            }
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * 项目卡片交互初始化
 */
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectType = this.getAttribute('data-project');
            openProjectModal(projectType, this);
        });
        
        // 键盘导航支持
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectType = this.getAttribute('data-project');
                openProjectModal(projectType, this);
            }
        });
        
        // 设置tabindex以支持键盘导航
        card.setAttribute('tabindex', '0');
    });
    
    // 初始化Modal关闭功能
    initializeModalClose();
}

/**
 * 项目数据配置
 */
const projectData = {
    autocut: {
        title: 'AutoCut (0→1)',
        vimeoId: '1113875050',
        tags: ['AI/ML', 'Video Creation', 'Product Strategy'],
        challenge: 'Users need professional-grade video editing tools, but traditional tools have high learning costs and complex operations, limiting the creative ability of ordinary users.',
        role: 'As the lead product manager, I was responsible for product strategy formulation from 0 to 1, user research, feature design, and cross-team collaboration, ensuring the product was successfully launched and achieved growth targets.',
        solution: [
            'Designed an intuitive drag-and-drop video editing interface that simplified complex editing workflows',
            'Integrated AI-powered intelligent editing algorithms that automatically identify optimal cut points and transition effects',
            'Established a complete user feedback loop for continuous product experience optimization',
            'Collaborated closely with the ML team to optimize algorithm performance and user experience'
        ],
        impact: {
            metric: '+66%',
            label: 'Usage Growth'
        }
    },
    templates: {
        title: 'AI-Powered Templates',
        video: 'assets/projects/ai-templates-demo.mp4',
        tags: ['Machine Learning', 'Template System', 'Scalability'],
        challenge: 'Designer templates are limited in quantity and cannot meet the diverse needs of large numbers of users, while manual template creation is inefficient, limiting the diversity of content creation.',
        role: 'Led the product strategy for the AI template system, responsible for user needs analysis, technical solution evaluation, product design, and post-launch performance optimization.',
        solution: [
            'Designed AI template learning algorithms that can extract design patterns from excellent templates',
            'Established a template quality assessment system to ensure professional standards for AI-generated templates',
            'Implemented intelligent template classification and recommendation systems',
            'Optimized template generation workflows to improve production efficiency and quality'
        ],
        impact: {
            metric: '+47.67%',
            label: 'Publish Rate'
        }
    },
    effects: {
        title: 'Effect Path Optimization',
        vimeoId: '1113875050',
        tags: ['UX Optimization', 'Performance', 'User Engagement'],
        challenge: 'Slow effect loading speeds and poor trial experiences led to high user churn rates, affecting overall creative tool usage and user satisfaction.',
        role: 'Responsible for product design of effect path optimization, identifying key optimization points through data analysis and user research, and driving technical team implementation improvements.',
        solution: [
            'Optimized effect preloading mechanisms to reduce waiting times',
            'Redesigned effect trial workflows to enhance user experience',
            'Implemented intelligent caching strategies to improve loading performance',
            'Established effect usage data analysis systems for continuous product optimization'
        ],
        impact: {
            metric: '+0.7%',
            label: 'Effect Publish Rate'
        }
    }
};

/**
 * 打开项目Modal
 */
function openProjectModal(projectType, cardElement) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectType];
    
    if (!modal || !project) return;
    
    // 添加点击反馈
    cardElement.style.transform = 'scale(0.98)';
    setTimeout(() => {
        cardElement.style.transform = '';
    }, 150);
    
    // 填充Modal内容
    document.getElementById('modalTitle').textContent = project.title;
    
    // 处理视频显示 - 支持Vimeo和本地视频
    const modalVideoContainer = document.getElementById('modalVideoContainer');
    if (project.vimeoId) {
        // 显示Vimeo视频
        modalVideoContainer.innerHTML = `
            <div style="padding:56.25% 0 0 0;position:relative;">
                <iframe src="https://player.vimeo.com/video/${project.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                        title="${project.title}">
                </iframe>
            </div>
        `;
    } else if (project.video) {
        // 显示本地视频
        modalVideoContainer.innerHTML = `
            <video class="modal-video" controls>
                <source src="${project.video}" type="video/mp4">
            </video>
        `;
    }
    
    // 填充标签
    const modalTags = document.getElementById('modalTags');
    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });
    
    // 填充故事内容
    document.getElementById('modalChallenge').textContent = project.challenge;
    document.getElementById('modalRole').textContent = project.role;
    
    const solutionList = document.getElementById('modalSolution');
    solutionList.innerHTML = '';
    project.solution.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        solutionList.appendChild(li);
    });
    
    // 填充影响数据
    const impactElement = document.getElementById('modalImpact');
    impactElement.innerHTML = `
        <span class="impact-metric">${project.impact.metric}</span>
        <span class="impact-label">${project.impact.label}</span>
    `;
    
    // 显示Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 聚焦到Modal
    modal.focus();
}

/**
 * 初始化Modal关闭功能
 */
function initializeModalClose() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalClose');
    
    if (!modal || !closeBtn) return;
    
    // 点击关闭按钮
    closeBtn.addEventListener('click', closeProjectModal);
    
    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

/**
 * 关闭项目Modal
 */
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    // 隐藏Modal
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // 重置视频容器
    const modalVideoContainer = document.getElementById('modalVideoContainer');
    if (modalVideoContainer) {
        modalVideoContainer.innerHTML = '';
    }
}

/**
 * 工具箱项目交互初始化
 */
function initializeToolItems() {
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const skill = this.getAttribute('data-skill');
            if (skill) {
                // 悬停时显示技能等级
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // 键盘导航支持
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // 可以在这里添加工具详情的展示逻辑
                const toolName = this.querySelector('.tool-name').textContent;
                console.log(`Tool: ${toolName}`);
            }
        });
    });
}

/**
 * 联系表单初始化
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // 表单验证
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // 模拟表单提交
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            
            // 重置表单
            this.reset();
            
            // 这里可以添加实际的表单提交逻辑
            console.log('Form submitted:', { name, email, message });
        });
        
        // 实时表单验证
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

/**
 * 表单字段验证
 */
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldError(field);
    
    if (!value) {
        showFieldError(field, `${getFieldLabel(fieldName)} is required.`);
        return false;
    }
    
    if (fieldName === 'email' && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address.');
        return false;
    }
    
    return true;
}

/**
 * 显示字段错误
 */
function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ff6b6b';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '4px';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#ff6b6b';
}

/**
 * 清除字段错误
 */
function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '';
}

/**
 * 获取字段标签
 */
function getFieldLabel(fieldName) {
    const labels = {
        name: 'Name',
        email: 'Email',
        message: 'Message'
    };
    return labels[fieldName] || fieldName;
}

/**
 * 邮箱验证
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * 滚动显示动画初始化
 */
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const revealElements = document.querySelectorAll('.experience-item, .project-card, .tool-item');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/**
 * 显示通知消息
 */
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 设置样式
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // 根据类型设置背景色
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

/**
 * 更新页脚年份
 */
function updateCurrentYear() {
    const yearElement = document.querySelector('.footer-content p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }
}

/**
 * 工具函数：防抖
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 工具函数：节流
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 视频方向检测和样式优化
 */
function initializeVideoOptimization() {
    const videos = document.querySelectorAll('.project-video');
    
    videos.forEach(video => {
        video.addEventListener('loadedmetadata', function() {
            const isPortrait = this.videoHeight > this.videoWidth;
            if (isPortrait) {
                this.setAttribute('data-orientation', 'portrait');
                this.style.objectFit = 'contain';
                this.style.background = '#000';
            } else {
                this.setAttribute('data-orientation', 'landscape');
                this.style.objectFit = 'cover';
            }
        });
    });
}

/**
 * 性能优化：懒加载图片
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * 页面可见性API支持
 */
function initializePageVisibility() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // 页面隐藏时的处理
            document.title = '👋 Come back! - Feng Xu (Andy)';
        } else {
            // 页面显示时的处理
            document.title = 'Feng Xu (Andy) - Senior Product Manager | AI-Driven Creation Tools';
        }
    });
}

/**
 * 错误处理
 */
function initializeErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // 可以在这里添加错误上报逻辑
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        // 可以在这里添加错误上报逻辑
    });
}

// 初始化额外的功能
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
    initializePageVisibility();
    initializeErrorHandling();
    initializeVideoOptimization();
});

// 导出函数供外部使用（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        showNotification,
        debounce,
        throttle
    };
}


