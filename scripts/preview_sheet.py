#!/usr/bin/env python3
"""Baut ein Vorschau-Kontaktblatt aus den generierten Logo-SVGs (nur /tmp)."""
import re, os
ROOT = "/Users/maxasamer/Desktop/AsTech/public/brand"

def inner(path):
    s = open(os.path.join(ROOT, path)).read()
    s = re.sub(r'<\?xml[^>]*\?>', '', s)
    m = re.search(r'<svg[^>]*viewBox="([^"]+)"[^>]*>(.*)</svg>', s, re.S)
    vb, body = m.group(1), m.group(2)
    return vb, body

def place(path, x, y, w):
    vb, body = inner(path)
    _,_,vw,vh = map(float, vb.split())
    h = w*vh/vw
    return f'<svg x="{x}" y="{y}" width="{w}" height="{h}" viewBox="{vb}" overflow="visible">{body}</svg>', h

W,H = 1500, 1760
P=[]
# Panel hell
P.append(f'<rect x="0" y="0" width="{W}" height="440" fill="#F4F6FA"/>')
P.append(f'<text x="40" y="50" font-family="sans-serif" font-size="22" fill="#64748B">hell · #F4F6FA</text>')
m,_=place("horizontal/asamer-logo-horizontal.svg",60,90,560); P.append(m)
m,_=place("vertical/asamer-logo-vertical.svg",760,80,150); P.append(m)
m,_=place("icon/asamer-icon.svg",980,110,120); P.append(m)
m,_=place("app-icon/asamer-app-icon-light.svg",1180,90,150); P.append(m)
m,_=place("horizontal/asamer-logo-horizontal-blue.svg",60,300,360); P.append(m)
# Panel dunkel
P.append(f'<rect x="0" y="440" width="{W}" height="440" fill="#0F172A"/>')
P.append(f'<text x="40" y="490" font-family="sans-serif" font-size="22" fill="#94A3B8">dunkel · #0F172A</text>')
m,_=place("horizontal/asamer-logo-horizontal-white.svg",60,530,560); P.append(m)
m,_=place("vertical/asamer-logo-vertical-white.svg",760,520,150); P.append(m)
m,_=place("icon/asamer-icon-white.svg",980,550,120); P.append(m)
m,_=place("app-icon/asamer-app-icon.svg",1180,530,150); P.append(m)
# Panel blau
P.append(f'<rect x="0" y="880" width="{W}" height="320" fill="#004899"/>')
P.append(f'<text x="40" y="930" font-family="sans-serif" font-size="22" fill="#BFD3EA">primary · #004899</text>')
m,_=place("horizontal/asamer-logo-horizontal-white.svg",60,970,520); P.append(m)
m,_=place("icon/asamer-icon-white.svg",760,990,110); P.append(m)
m,_=place("app-icon/asamer-avatar.svg",980,960,150); P.append(m)
m,_=place("favicon/favicon.svg",1200,985,90); P.append(m)
P.append(f'<text x="1200" y="1110" font-family="sans-serif" font-size="18" fill="#BFD3EA">favicon 32px</text>')
# Panel social
P.append(f'<rect x="0" y="1200" width="{W}" height="560" fill="#E2E8F0"/>')
P.append(f'<text x="40" y="1250" font-family="sans-serif" font-size="22" fill="#475569">Grafik-Vorlagen</text>')
m,_=place("social/asamer-og-image.svg",40,1280,640); P.append(m)
m,_=place("social/asamer-social-square.svg",720,1280,420); P.append(m)
m,_=place("social/asamer-banner-wide.svg",40,1640,640); P.append(m)
m,_=place("pattern/asamer-pattern.svg",1180,1280,280); P.append(m)

svg=f'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">{"".join(P)}</svg>'
open("/tmp/asbrand/preview.svg","w").write(svg)
print("preview.svg geschrieben")
