/** @type {import('tailwindcss').Config} */
const config =  {
  darkMode: ['selector', '[data-theme="dark"]'], // use data-theme, not class
  content: ['./src/app/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pm: {
          bg:            'var(--bg)',
          s0:            'var(--s0)',
          s1:            'var(--s1)',
          s2:            'var(--s2)',
          s3:            'var(--s3)',
          s4:            'var(--s4)',
          accent:        'var(--acc)',
          'accent-deep': 'var(--acc-deep)',
          'accent-glow': 'var(--acc-glow)',
          'accent-tint': 'var(--acc-tint)',
          t1:            'var(--t1)',
          t2:            'var(--t2)',
          t3:            'var(--t3)',
          t4:            'var(--t4)',
          l1:            'var(--l1)',
          l2:            'var(--l2)',
          l3:            'var(--l3)',
          l4:            'var(--l4)',
          green:         'var(--green)',
          gold:          'var(--gold)',
          rose:          'var(--rose)',
          purple:        'var(--purple)',
          teal:          'var(--teal)',
          orange:        'var(--orange)',
          bronze:        'var(--t-bronze)',
          silver:        'var(--t-silver)',
          diamond:       'var(--t-diamond)',
          legend:        'var(--t-legend)',
        },
      },
      fontFamily: {
        display: 'var(--fd)',
        serif:   'var(--fs)',
        mono:    'var(--fm)',
      },
      boxShadow: {
        'pm-sm': 'var(--sh-sm)',
        'pm':    'var(--sh)',
        'pm-lg': 'var(--sh-lg)',
      },
      borderRadius: {
        'pm-sm':   '8px',
        'pm-md':   '10px',
        'pm-lg':   '12px',
        'pm-xl':   '14px',
        'pm-2xl':  '16px',
        'pm-3xl':  '20px',
        'pm-pill': '999px',
      },
      backgroundImage: {
        'brand-grad': 'var(--brand-grad)',
      },
    },
  },
  plugins: [],
}

export default config;
