/*
Code of jquery.ripple.js rewritten on vanilla JS with AI.
https://github.com/sus-happy/jquery.ripple.js

CSS:

.ripple-wrapper {
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
}

.ripple-effect {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
}

Effect color can be provided by 'data-color' attribute.

Usage:
document.querySelectorAll('.btn').forEach(element => new Ripple(element));
*/

class Ripple {
  constructor(target, options = {}) {
    this.target = target;
    this.vDuration = options.vDuration || 400;
    this.hDuration = options.hDuration || 400;
    this.timer = null;

    this.init();
  }

  wrapInner(element, wrapper) {
    const content = element.innerHTML;
    element.innerHTML = '';
    wrapper.innerHTML = content;
    element.appendChild(wrapper);
  }

  init() {
    if (getComputedStyle(this.target).position === 'static') {
      this.target.style.position = 'relative';
    }
    this.target.classList.add('ripple-initialized');

    const innerWrapper = document.createElement('span');
    innerWrapper.classList.add('ripple-inner');
    this.wrapInner(this.target, innerWrapper);

    const rippleWrapper = document.createElement('span');
    rippleWrapper.classList.add('ripple-wrapper');

    const rippleEffect = document.createElement('span');
    rippleEffect.classList.add('ripple-effect');

    rippleWrapper.appendChild(rippleEffect);
    this.target.appendChild(rippleWrapper);

    this.rippleWrapper = rippleWrapper;
    this.rippleEffect = rippleEffect;

    this.rippleWrapper.style.borderTopLeftRadius = getComputedStyle(this.target).borderTopLeftRadius;
    this.rippleWrapper.style.borderTopRightRadius = getComputedStyle(this.target).borderTopRightRadius;
    this.rippleWrapper.style.borderBottomLeftRadius = getComputedStyle(this.target).borderBottomLeftRadius;
    this.rippleWrapper.style.borderBottomRightRadius = getComputedStyle(this.target).borderBottomRightRadius;

    const top = parseFloat(getComputedStyle(this.target).borderTopWidth) || 0;
    const left = parseFloat(getComputedStyle(this.target).borderLeftWidth) || 0;
    this.rippleWrapper.style.top = -top + 'px';
    this.rippleWrapper.style.left = -left + 'px';

    this.rippleEffect.style.backgroundColor = this.target.getAttribute('data-color');

    this.target.addEventListener('mousedown', this.view.bind(this));
    this.target.addEventListener('mouseup', this.hidden.bind(this));
    this.target.addEventListener('mouseleave', this.hidden.bind(this));
  }

  view(e) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    const width = this.target.offsetWidth;
    const height = this.target.offsetHeight;
    this.rippleWrapper.style.width = width + 'px';
    this.rippleWrapper.style.height = height + 'px';
    this.rippleWrapper.style.opacity = '1';
    this.rippleWrapper.style.transition = 'none';

    const circleRatio = 2.8;
    const size = Math.max(width, height);
    const rect = this.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    this.rippleEffect.style.width = size + 'px';
    this.rippleEffect.style.height = size + 'px';
    this.rippleEffect.style.transform = 'scale3d(0, 0, 1)';
    this.rippleEffect.style.left = offsetX - size / 2 + 'px';
    this.rippleEffect.style.top = offsetY - size / 2 + 'px';
    this.rippleEffect.style.transition = 'none';

    setTimeout(() => {
      this.rippleEffect.style.transition = `transform ${this.vDuration / 1000}s ease-out`;
      this.rippleEffect.style.transform = `scale3d(${circleRatio}, ${circleRatio}, 1)`;
    }, 1);
  }

  hidden() {
    this.rippleWrapper.style.opacity = '0';
    this.rippleWrapper.style.transition = `opacity ${this.hDuration / 1000}s ease-out`;

    this.timer = setTimeout(() => {
      this.rippleWrapper.style.opacity = '1';
      this.rippleWrapper.style.transition = 'none';
      this.rippleEffect.style.transform = 'scale3d(0, 0, 1)';
      this.rippleEffect.style.transition = 'none';
    }, this.vDuration);
  }
}
