(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-2d0daea2'], { '6e41': function (e, t, a) { 'use strict'; a.r(t); var n = a('7a23'); var r = { class: 'flex flex-col items-center w-3/5   mx-auto px-6 py-8 gap-1' }; var i = { class: 'flex flex-wrap justify-items-center-m-10' }; function o (e, t, a, o, s, c) { var l = Object(n.I)('admin-card'); return Object(n.A)(), Object(n.f)('div', r, [Object(n.j)('div', i, [Object(n.j)(l, { alias: 'Início' }), Object(n.j)(l, { alias: 'Noticias' }), Object(n.j)(l, { alias: 'SobreNos' }), Object(n.j)(l, { alias: 'Contato' }), Object(n.j)(l, { alias: 'Projetos' }), Object(n.j)(l, { alias: 'Acervo' })])]) } var s = { class: 'xl:w-2/4 md:w-1/2 p-4' }; var c = { class: 'border border-gray-200 p-6 rounded-lg hover:bg-green-200 active:bg-green-700' }; var l = Object(n.j)('div', { class: 'w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4' }, [Object(n.j)('svg', { fill: 'none', stroke: 'currentColor', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', class: 'w-6 h-6', viewBox: '0 0 24 24' }, [Object(n.j)('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })])], -1); var d = { class: 'text-lg text-gray-900 font-medium title-font mb-2' }; var b = Object(n.j)('p', { class: 'leading-relaxed text-base' }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae velit non leo mattis lobortis sed ac augue.', -1); var u = Object(n.j)('span', null, 'Atualizar', -1); function j (e, t, a, r, i, o) { return Object(n.A)(), Object(n.f)('div', s, [Object(n.j)('div', c, [l, Object(n.j)('h2', d, Object(n.L)(a.alias), 1), b, Object(n.j)('button', { onClick: t[1] || (t[1] = function (e) { return r.pushAdminPage() }), class: 'ml-auto text-brand-main flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500' }, [u])])]) } var p = a('6c02'); var g = { props: ['alias'], setup: function (e) { var t = Object(p.d)(); function a () { t.push({ name: 'Administrador'.concat(e.alias) }) } return { pushAdminPage: a } } }; var f = a('d959'); var m = a.n(f); const O = m()(g, [['render', j]]); var v = O; var x = { components: { AdminCard: v } }; const w = m()(x, [['render', o]]); t.default = w } }])
// # sourceMappingURL=chunk-2d0daea2.2ad3c25a.js.map
