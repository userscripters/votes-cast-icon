(() => {
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const ICON_SEL = "div[title*='votes cast'] svg";

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.classList.add('svg-icon', 'iconArrowUpDown');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('viewBox', '0 0 18 18');
    svg.setAttribute('aria-hidden', 'true');

    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', 'm9 1 7 7H2l7-7zm0 16 7-7H2l7 7z');

    svg.append(path);

    const icon = document.querySelector(ICON_SEL);
    if (!icon) return;

    icon.replaceWith(svg);
})();