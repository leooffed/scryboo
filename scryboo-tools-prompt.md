# Prompt de développement — tools.scryboo.com

## Contexte du projet

Tu vas construire **Scryboo Tools** (`tools.scryboo.com`), un site d'outils en ligne 100% gratuits, monétisé par Google AdSense et Facebook Audience Network. C'est le premier produit de l'écosystème **Scryboo** — une startup d'apps utilitaires déployées sur sous-domaines, ciblant le grand public et les PME en Afrique francophone.

L'objectif est de lancer un MVP fonctionnel avec **10 outils minimum**, optimisé SEO dès le premier jour, avec Google AdSense intégré, le tout pour un coût d'hébergement inférieur à 50$/mois.

---

## Stack technique obligatoire

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript strict
- **Styles** : Tailwind CSS v3
- **Hébergement** : Vercel (free tier au départ)
- **Pub display** : Google AdSense (script dans `<head>`, composant `<AdBanner>` réutilisable)
- **Analytics** : Plausible Analytics (script léger, RGPD-compatible)
- **SEO** : `next-sitemap` pour la génération automatique du sitemap
- **Outils PDF** : `pdf-lib` + `pdfjs-dist` (traitement côté client)
- **Outils image** : `browser-image-compression` + Canvas API (côté client, pas de serveur)
- **Outils IA** : Anthropic Claude API (`@anthropic-ai/sdk`) — pay-per-use
- **Formulaires** : React Hook Form + Zod pour la validation
- **Icons** : Lucide React
- **Internationalisation** : `next-intl` (FR par défaut, EN secondaire)

Aucune base de données n'est requise pour le MVP. Tout le traitement se fait côté client.

---

## Architecture du projet

```
tools.scryboo.com/
├── app/
│   ├── layout.tsx                  # Layout global avec AdSense script + Plausible
│   ├── page.tsx                    # Page d'accueil — grille de toutes les catégories
│   ├── sitemap.ts                  # Sitemap dynamique
│   ├── robots.ts                   # robots.txt
│   │
│   ├── texte/
│   │   ├── page.tsx                # Catégorie Texte & Écriture
│   │   ├── compteur-mots/
│   │   │   └── page.tsx            # Outil : Compteur de mots
│   │   ├── generateur-lorem/
│   │   │   └── page.tsx
│   │   ├── convertisseur-casse/
│   │   │   └── page.tsx
│   │   ├── supprimer-doublons/
│   │   │   └── page.tsx
│   │   └── extracteur-emails/
│   │       └── page.tsx
│   │
│   ├── image/
│   │   ├── page.tsx
│   │   ├── compresseur-image/
│   │   │   └── page.tsx
│   │   ├── convertisseur-format/
│   │   │   └── page.tsx
│   │   └── redimensionneur/
│   │       └── page.tsx
│   │
│   ├── pdf/
│   │   ├── page.tsx
│   │   ├── fusionner-pdf/
│   │   │   └── page.tsx
│   │   ├── splitter-pdf/
│   │   │   └── page.tsx
│   │   └── pdf-vers-word/
│   │       └── page.tsx
│   │
│   ├── calculateurs/
│   │   ├── page.tsx
│   │   ├── imc/
│   │   │   └── page.tsx
│   │   ├── simulateur-pret/
│   │   │   └── page.tsx
│   │   ├── convertisseur-devises/
│   │   │   └── page.tsx
│   │   ├── calculateur-tva/
│   │   │   └── page.tsx
│   │   └── generateur-facture/
│   │       └── page.tsx
│   │
│   ├── dev/
│   │   ├── page.tsx
│   │   ├── encodeur-base64/
│   │   │   └── page.tsx
│   │   ├── generateur-mot-de-passe/
│   │   │   └── page.tsx
│   │   ├── formateur-json/
│   │   │   └── page.tsx
│   │   └── convertisseur-couleur/
│   │       └── page.tsx
│   │
│   └── ia/
│       ├── page.tsx
│       ├── resumeur-texte/
│       │   └── page.tsx
│       ├── correcteur-orthographe/
│       │   └── page.tsx
│       ├── generateur-bio/
│       │   └── page.tsx
│       └── generateur-nom-business/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Logo Scryboo Tools + nav catégories + recherche
│   │   ├── Footer.tsx              # Liens légaux + autres produits Scryboo
│   │   └── Breadcrumb.tsx          # Fil d'Ariane pour chaque outil
│   │
│   ├── ads/
│   │   ├── AdBanner.tsx            # Bannière AdSense réutilisable (horizontal / vertical / carré)
│   │   └── AdSenseScript.tsx       # Script global AdSense dans le <head>
│   │
│   ├── tools/
│   │   ├── ToolLayout.tsx          # Layout standard pour tous les outils
│   │   ├── ToolCard.tsx            # Carte outil pour la page d'accueil
│   │   ├── ToolSearch.tsx          # Barre de recherche live parmi tous les outils
│   │   ├── FileDropzone.tsx        # Zone drag & drop pour upload de fichiers
│   │   ├── CopyButton.tsx          # Bouton "Copier le résultat"
│   │   ├── DownloadButton.tsx      # Bouton "Télécharger le fichier"
│   │   └── ToolFeedback.tsx        # Boutons Utile / Pas utile (pour analytics)
│   │
│   └── seo/
│       ├── ToolSEO.tsx             # Composant meta tags pour chaque outil
│       └── StructuredData.tsx      # JSON-LD Schema.org pour les outils
│
├── lib/
│   ├── tools/                      # Logique pure de chaque catégorie d'outil
│   │   ├── text.ts                 # Fonctions texte (compteur, lorem, casse...)
│   │   ├── image.ts                # Compression, redimensionnement, conversion
│   │   ├── pdf.ts                  # Fusion, split, conversion PDF
│   │   ├── calculators.ts          # IMC, prêt, TVA, devises
│   │   ├── dev.ts                  # Base64, JSON, couleurs, UUID
│   │   └── ai.ts                   # Appels Claude API (résumé, correction, bio)
│   │
│   ├── tools-registry.ts           # Registre central de tous les outils (métadonnées SEO)
│   ├── analytics.ts                # Events Plausible personnalisés
│   └── adsense.ts                  # Helpers AdSense (placement, lazy load)
│
├── types/
│   └── tools.ts                    # Types TypeScript partagés
│
├── public/
│   ├── og/                         # Images Open Graph par catégorie
│   └── icons/                      # Favicon + PWA icons
│
├── next.config.js
├── tailwind.config.ts
└── next-sitemap.config.js
```

---

## Registre central des outils — `lib/tools-registry.ts`

Ce fichier est critique pour le SEO et la navigation. Il centralise les métadonnées de tous les outils.

```typescript
export type ToolCategory = 
  | 'texte' 
  | 'image' 
  | 'pdf' 
  | 'calculateurs' 
  | 'dev' 
  | 'ia'

export interface Tool {
  slug: string                    // ex: "compteur-mots"
  category: ToolCategory
  name: string                    // ex: "Compteur de mots"
  description: string             // 150-160 chars pour meta description
  keywords: string[]              // mots-clés SEO ciblés
  icon: string                    // nom icône Lucide
  isNew?: boolean
  isPopular?: boolean
  usesAI?: boolean
}

export const TOOLS_REGISTRY: Tool[] = [
  // TEXTE
  {
    slug: 'compteur-mots',
    category: 'texte',
    name: 'Compteur de mots',
    description: 'Comptez les mots, caractères, phrases et paragraphes de votre texte instantanément. Outil gratuit, sans inscription, sans limite.',
    keywords: ['compteur de mots', 'compter mots en ligne', 'nombre de mots', 'compteur caractères gratuit'],
    icon: 'FileText',
    isPopular: true,
  },
  {
    slug: 'generateur-lorem',
    category: 'texte',
    name: 'Générateur Lorem Ipsum',
    description: 'Générez du texte de remplissage Lorem Ipsum pour vos maquettes. Choisissez le nombre de paragraphes, mots ou phrases.',
    keywords: ['lorem ipsum générateur', 'texte lorem ipsum', 'faux texte maquette', 'placeholder text gratuit'],
    icon: 'AlignLeft',
  },
  {
    slug: 'convertisseur-casse',
    category: 'texte',
    name: 'Convertisseur de casse',
    description: 'Convertissez votre texte en MAJUSCULES, minuscules, Titre, camelCase ou snake_case en un clic.',
    keywords: ['convertir majuscule minuscule', 'changer casse texte', 'uppercase lowercase français'],
    icon: 'Type',
  },
  {
    slug: 'supprimer-doublons',
    category: 'texte',
    name: 'Supprimer les doublons',
    description: 'Supprimez les lignes en double d\'une liste en un clic. Idéal pour nettoyer des listes d\'emails, de noms ou d\'URLs.',
    keywords: ['supprimer doublons liste', 'enlever lignes dupliquées', 'nettoyer liste en ligne'],
    icon: 'Filter',
  },
  {
    slug: 'extracteur-emails',
    category: 'texte',
    name: 'Extracteur d\'emails',
    description: 'Extrayez automatiquement toutes les adresses email d\'un texte ou d\'une page web. Résultat en un clic.',
    keywords: ['extraire emails texte', 'trouver adresses email', 'email extractor gratuit français'],
    icon: 'Mail',
  },
  // IMAGE
  {
    slug: 'compresseur-image',
    category: 'image',
    name: 'Compresseur d\'image',
    description: 'Compressez vos images JPG et PNG gratuitement sans perte de qualité visible. Réduction jusqu\'à 80% du poids.',
    keywords: ['compresser image en ligne gratuit', 'réduire taille image', 'compression jpg png sans perte'],
    icon: 'ImageDown',
    isPopular: true,
  },
  {
    slug: 'convertisseur-format',
    category: 'image',
    name: 'Convertisseur d\'images',
    description: 'Convertissez vos images JPG, PNG, WEBP, GIF gratuitement en ligne. Conversion instantanée, aucun logiciel requis.',
    keywords: ['convertir image jpg png', 'conversion format image gratuit', 'jpg vers png en ligne'],
    icon: 'RefreshCw',
  },
  {
    slug: 'redimensionneur',
    category: 'image',
    name: 'Redimensionneur d\'images',
    description: 'Redimensionnez vos images à n\'importe quelle taille en pixels ou pourcentage. Gratuit, rapide, sans filigrane.',
    keywords: ['redimensionner image en ligne', 'changer taille image gratuit', 'resize image pixels'],
    icon: 'Maximize2',
  },
  // PDF
  {
    slug: 'fusionner-pdf',
    category: 'pdf',
    name: 'Fusionner des PDF',
    description: 'Combinez plusieurs fichiers PDF en un seul document en quelques secondes. Gratuit, sécurisé, traitement dans votre navigateur.',
    keywords: ['fusionner pdf gratuit', 'combiner pdf en ligne', 'merger pdf sans logiciel'],
    icon: 'Combine',
    isPopular: true,
  },
  {
    slug: 'splitter-pdf',
    category: 'pdf',
    name: 'Diviser un PDF',
    description: 'Séparez un fichier PDF en plusieurs documents. Choisissez les pages à extraire ou divisez par intervalles.',
    keywords: ['diviser pdf en ligne', 'séparer pages pdf gratuit', 'split pdf sans inscription'],
    icon: 'Scissors',
  },
  {
    slug: 'pdf-vers-word',
    category: 'pdf',
    name: 'PDF vers Word',
    description: 'Convertissez vos fichiers PDF en documents Word (.docx) éditables. Conversion gratuite et rapide.',
    keywords: ['convertir pdf en word gratuit', 'pdf vers docx en ligne', 'pdf to word français'],
    icon: 'FileOutput',
  },
  // CALCULATEURS
  {
    slug: 'imc',
    category: 'calculateurs',
    name: 'Calculateur IMC',
    description: 'Calculez votre Indice de Masse Corporelle (IMC) et découvrez votre catégorie de poids. Résultat instantané.',
    keywords: ['calculateur imc gratuit', 'calcul indice masse corporelle', 'imc normal surpoids'],
    icon: 'Activity',
    isPopular: true,
  },
  {
    slug: 'simulateur-pret',
    category: 'calculateurs',
    name: 'Simulateur de prêt',
    description: 'Calculez vos mensualités, le coût total et le tableau d\'amortissement de votre prêt bancaire. Adapté aux banques africaines.',
    keywords: ['simulateur prêt bancaire', 'calculer mensualité crédit', 'tableau amortissement gratuit'],
    icon: 'Banknote',
  },
  {
    slug: 'convertisseur-devises',
    category: 'calculateurs',
    name: 'Convertisseur de devises',
    description: 'Convertissez entre FCFA, Euro, Dollar, et 150+ devises avec les taux de change en temps réel.',
    keywords: ['convertir fcfa euro', 'taux de change fcfa dollar', 'convertisseur devises afrique gratuit'],
    icon: 'DollarSign',
  },
  {
    slug: 'calculateur-tva',
    category: 'calculateurs',
    name: 'Calculateur TVA',
    description: 'Calculez le montant HT, TVA et TTC. Supporte les taux TVA du Cameroun (19,25%), Côte d\'Ivoire (18%), Sénégal (18%) et France (20%).',
    keywords: ['calculateur tva cameroun', 'calcul tva afrique', 'ht ttc tva gratuit'],
    icon: 'Percent',
  },
  {
    slug: 'generateur-facture',
    category: 'calculateurs',
    name: 'Générateur de facture PDF',
    description: 'Créez et téléchargez une facture professionnelle en PDF gratuitement. Personnalisez votre logo, client, articles et TVA.',
    keywords: ['créer facture pdf gratuit', 'générateur facture en ligne', 'modèle facture pdf'],
    icon: 'Receipt',
  },
  // DEV
  {
    slug: 'encodeur-base64',
    category: 'dev',
    name: 'Encodeur / Décodeur Base64',
    description: 'Encodez ou décodez du texte, des images ou des fichiers en Base64 instantanément dans votre navigateur.',
    keywords: ['encodeur base64 en ligne', 'décoder base64 gratuit', 'base64 encode decode français'],
    icon: 'Code',
  },
  {
    slug: 'generateur-mot-de-passe',
    category: 'dev',
    name: 'Générateur de mot de passe',
    description: 'Générez des mots de passe forts et sécurisés. Personnalisez la longueur, les majuscules, chiffres et symboles.',
    keywords: ['générateur mot de passe fort', 'créer password sécurisé', 'random password gratuit'],
    icon: 'Lock',
    isPopular: true,
  },
  {
    slug: 'formateur-json',
    category: 'dev',
    name: 'Formateur / Validateur JSON',
    description: 'Formatez, indentez et validez votre JSON en un clic. Détection d\'erreurs de syntaxe en temps réel.',
    keywords: ['formater json en ligne', 'valider json gratuit', 'json formatter beautifier'],
    icon: 'Braces',
  },
  {
    slug: 'convertisseur-couleur',
    category: 'dev',
    name: 'Convertisseur de couleurs',
    description: 'Convertissez vos couleurs entre HEX, RGB, HSL et CMJN. Sélecteur visuel intégré.',
    keywords: ['convertir hex rgb gratuit', 'convertisseur couleur hex hsl', 'color picker converter'],
    icon: 'Palette',
  },
  // IA
  {
    slug: 'resumeur-texte',
    category: 'ia',
    name: 'Résumeur de texte IA',
    description: 'Résumez n\'importe quel texte long en quelques phrases clés grâce à l\'intelligence artificielle. Gratuit, 3 résumés/jour.',
    keywords: ['résumer texte automatiquement', 'résumé automatique ia', 'résumeur texte gratuit'],
    icon: 'Sparkles',
    usesAI: true,
    isPopular: true,
  },
  {
    slug: 'correcteur-orthographe',
    category: 'ia',
    name: 'Correcteur orthographe IA',
    description: 'Corrigez automatiquement les fautes d\'orthographe et de grammaire en français avec l\'IA. Plus puissant qu\'un correcteur classique.',
    keywords: ['correcteur orthographe gratuit', 'corriger fautes automatique', 'correcteur grammaire français ia'],
    icon: 'SpellCheck',
    usesAI: true,
  },
  {
    slug: 'generateur-bio',
    category: 'ia',
    name: 'Générateur de bio IA',
    description: 'Créez une biographie professionnelle pour LinkedIn, Instagram ou votre CV en quelques secondes grâce à l\'IA.',
    keywords: ['générer bio linkedin', 'créer biographie professionnelle ia', 'bio instagram générateur'],
    icon: 'UserCheck',
    usesAI: true,
  },
  {
    slug: 'generateur-nom-business',
    category: 'ia',
    name: 'Générateur de nom d\'entreprise',
    description: 'Trouvez le nom parfait pour votre business grâce à l\'IA. Obtenez 10 suggestions créatives en quelques secondes.',
    keywords: ['trouver nom entreprise', 'générateur nom business ia', 'idées noms startup gratuit'],
    icon: 'Building2',
    usesAI: true,
  },
]

export const CATEGORIES = {
  texte:        { label: 'Texte & Écriture',  icon: 'FileText',    color: 'blue'   },
  image:        { label: 'Image & Photo',      icon: 'Image',       color: 'green'  },
  pdf:          { label: 'PDF',                icon: 'FileType',    color: 'red'    },
  calculateurs: { label: 'Calculateurs',       icon: 'Calculator',  color: 'amber'  },
  dev:          { label: 'Dev & Tech',         icon: 'Code2',       color: 'purple' },
  ia:           { label: 'Outils IA',          icon: 'Sparkles',    color: 'teal'   },
}
```

---

## Layout standard pour tous les outils — `components/tools/ToolLayout.tsx`

```tsx
// Structure de page identique pour TOUS les outils :
//
// [Header global]
// ─────────────────────────────────────────────────
// [AdBanner horizontal 728x90 — LEADERBOARD]
// ─────────────────────────────────────────────────
// [Breadcrumb] Accueil > Texte > Compteur de mots
//
// [Zone principale — 2 colonnes sur desktop]
// ┌─────────────────────────────┬──────────────┐
// │  Titre h1 de l'outil        │  [AdBanner]  │
// │  Description courte         │  300x250     │
// │  ─────────────────────────  │  RECTANGLE   │
// │  [Interface de l'outil]     │              │
// │  (input, bouton, résultat)  │              │
// │  ─────────────────────────  └──────────────┘
// │  [AdBanner in-content]
// │  ─────────────────────────
// │  [Section SEO — 150-200 mots]
// │  "Comment utiliser cet outil"
// │  "À quoi sert un compteur de mots"
// │  "FAQ"
// └──────────────────────────────────────────────
// [Footer global]
//
// Sur MOBILE : colonnes empilées, pub entre le résultat et la section SEO
```

---

## Composant AdBanner — `components/ads/AdBanner.tsx`

```tsx
'use client'

import { useEffect } from 'react'

interface AdBannerProps {
  slot: string                    // ID du slot AdSense
  format?: 'horizontal' | 'rectangle' | 'responsive'
  className?: string
}

export function AdBanner({ slot, format = 'responsive', className }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [])

  if (process.env.NODE_ENV === 'development') {
    // Placeholder en développement — ne pas afficher AdSense en local
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm ${className}`}>
        AdSense [{format}] — slot {slot}
      </div>
    )
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format === 'responsive' ? 'auto' : format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
```

---

## Exemple d'outil complet — Compteur de mots

### `app/texte/compteur-mots/page.tsx`

```tsx
import type { Metadata } from 'next'
import { CompteurMotsClient } from './CompteurMotsClient'
import { ToolLayout } from '@/components/tools/ToolLayout'

export const metadata: Metadata = {
  title: 'Compteur de mots gratuit en ligne — Scryboo Tools',
  description: 'Comptez les mots, caractères, phrases et paragraphes de votre texte instantanément. Outil gratuit, sans inscription, sans limite.',
  keywords: ['compteur de mots', 'compter mots en ligne', 'nombre de mots texte'],
  openGraph: {
    title: 'Compteur de mots — Scryboo Tools',
    description: 'Analysez votre texte : mots, caractères, phrases, paragraphes.',
    url: 'https://tools.scryboo.com/texte/compteur-mots',
    siteName: 'Scryboo Tools',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Page() {
  return (
    <ToolLayout
      title="Compteur de mots"
      description="Analysez instantanément votre texte : nombre de mots, caractères, phrases et paragraphes."
      category="texte"
      slug="compteur-mots"
      adSlotSidebar="XXXX-XXXX-1"
      adSlotInContent="XXXX-XXXX-2"
    >
      <CompteurMotsClient />
      
      {/* Section SEO — texte statique pour le crawl Google */}
      <section className="mt-8 prose prose-sm max-w-none text-gray-600">
        <h2>Comment utiliser le compteur de mots</h2>
        <p>
          Collez ou tapez votre texte dans la zone ci-dessus. Le compteur analyse 
          automatiquement votre contenu et affiche en temps réel le nombre de mots, 
          de caractères (avec et sans espaces), de phrases et de paragraphes.
        </p>
        <h2>À quoi sert un compteur de mots ?</h2>
        <p>
          Le compteur de mots est indispensable pour les rédacteurs, étudiants et 
          professionnels qui doivent respecter des contraintes de longueur : articles 
          de blog, mémoires universitaires, posts LinkedIn, SMS ou rédactions scolaires.
        </p>
        <h2>Questions fréquentes</h2>
        <h3>Mon texte est-il sauvegardé ?</h3>
        <p>Non. Tout le traitement se fait dans votre navigateur. Aucune donnée n'est envoyée à nos serveurs.</p>
        <h3>Y a-t-il une limite de taille ?</h3>
        <p>Non. L'outil fonctionne avec des textes de toute taille, y compris des documents très longs.</p>
      </section>
    </ToolLayout>
  )
}
```

### `app/texte/compteur-mots/CompteurMotsClient.tsx`

```tsx
'use client'

import { useState, useMemo } from 'react'
import { countText } from '@/lib/tools/text'
import { CopyButton } from '@/components/tools/CopyButton'

export function CompteurMotsClient() {
  const [text, setText] = useState('')

  const stats = useMemo(() => countText(text), [text])

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Collez ou tapez votre texte ici..."
        className="w-full h-48 p-4 border border-gray-200 rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        aria-label="Zone de texte à analyser"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Mots',        value: stats.words },
          { label: 'Caractères',  value: stats.chars },
          { label: 'Sans espaces',value: stats.charsNoSpaces },
          { label: 'Phrases',     value: stats.sentences },
          { label: 'Paragraphes', value: stats.paragraphs },
          { label: 'Temps lecture',value: `${stats.readingTime} min` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setText('')}
          className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          Effacer
        </button>
        <CopyButton text={text} label="Copier le texte" />
      </div>
    </div>
  )
}
```

---

## Logique des outils — `lib/tools/text.ts`

```typescript
export function countText(text: string) {
  const trimmed = text.trim()
  if (!trimmed) return { words: 0, chars: 0, charsNoSpaces: 0, sentences: 0, paragraphs: 0, readingTime: 0 }

  const words         = trimmed.split(/\s+/).filter(Boolean).length
  const chars         = text.length
  const charsNoSpaces = text.replace(/\s/g, '').length
  const sentences     = (trimmed.match(/[.!?]+/g) || []).length
  const paragraphs    = trimmed.split(/\n\s*\n/).filter(Boolean).length
  const readingTime   = Math.max(1, Math.ceil(words / 200))

  return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime }
}

export function convertCase(text: string, mode: 'upper' | 'lower' | 'title' | 'camel' | 'snake') {
  switch (mode) {
    case 'upper':  return text.toUpperCase()
    case 'lower':  return text.toLowerCase()
    case 'title':  return text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    case 'camel':  return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    case 'snake':  return text.toLowerCase().replace(/[\s-]+/g, '_').replace(/[^a-z0-9_]/g, '')
  }
}

export function removeDuplicates(text: string): string {
  const lines = text.split('\n')
  return [...new Set(lines)].join('\n')
}

export function extractEmails(text: string): string[] {
  const regex = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g
  return [...new Set(text.match(regex) || [])]
}

export function generateLorem(paragraphs: number = 3, wordsPerParagraph: number = 60): string {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return Array(paragraphs).fill(lorem).join('\n\n')
}
```

---

## Outils IA — `lib/tools/ai.ts`

```typescript
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

// Limite : 3 appels IA gratuits / jour / IP (contrôlé côté serveur via rate limiting)

export async function summarizeText(text: string, length: 'court' | 'moyen' | 'long' = 'moyen') {
  const lengthMap = { court: '3 phrases', moyen: '5 phrases', long: '10 phrases' }
  
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `Résume ce texte en ${lengthMap[length]} en français. Sois concis et fidèle au sens original. Réponds uniquement avec le résumé, sans introduction ni conclusion.\n\nTexte :\n${text}`
    }]
  })
  
  return (message.content[0] as { text: string }).text
}

export async function correctText(text: string) {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2048,
    messages: [{
      role: 'user',
      content: `Corrige les fautes d'orthographe et de grammaire dans ce texte français. Retourne uniquement le texte corrigé, sans explication, sans balises. Si le texte est déjà correct, retourne-le tel quel.\n\nTexte :\n${text}`
    }]
  })
  
  return (message.content[0] as { text: string }).text
}

export async function generateBio(params: {
  name: string
  profession: string
  skills: string
  tone: 'professionnel' | 'décontracté' | 'inspirant'
  platform: 'linkedin' | 'instagram' | 'cv'
}) {
  const lengthMap = { linkedin: '200 mots', instagram: '150 caractères', cv: '3 phrases' }
  
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 512,
    messages: [{
      role: 'user',
      content: `Rédige une biographie ${params.tone} pour ${params.platform} en français pour cette personne :
- Nom : ${params.name}
- Profession : ${params.profession}
- Compétences clés : ${params.skills}
Longueur : ${lengthMap[params.platform]}. Retourne uniquement la bio, sans introduction.`
    }]
  })
  
  return (message.content[0] as { text: string }).text
}

export async function generateBusinessNames(params: {
  activity: string
  keywords: string
  style: 'moderne' | 'classique' | 'créatif'
}) {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 512,
    messages: [{
      role: 'user',
      content: `Génère 10 noms d'entreprise ${params.style}s pour une activité de "${params.activity}" avec les mots-clés : "${params.keywords}". 
Retourne uniquement la liste numérotée des noms, sans explication. Les noms doivent être mémorables, courts (1-3 mots), originaux et disponibles comme domaine .com potentiellement.`
    }]
  })
  
  return (message.content[0] as { text: string }).text
}
```

---

## Configuration SEO — `next-sitemap.config.js`

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tools.scryboo.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://tools.scryboo.com/sitemap.xml',
    ],
  },
}
```

---

## Variables d'environnement — `.env.local`

```bash
# AdSense
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX

# Anthropic (pour les outils IA)
ANTHROPIC_API_KEY=sk-ant-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=tools.scryboo.com

# Rate limiting outils IA (Redis optionnel — utiliser Upstash gratuit)
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=XXXXXXXX
```

---

## Règles de développement obligatoires

### Performance
- Tous les outils s'exécutent **côté client** (sans appel API serveur) sauf les outils IA
- Pas de chargement de bibliothèques lourdes au niveau global — utiliser `dynamic(() => import(...), { ssr: false })` pour les libs PDF et image
- Objectif : LCP < 1,5s, CLS < 0,1, FID < 100ms
- Images optimisées avec `next/image`

### SEO (non négociable)
- Chaque outil a ses propres `metadata` TypeScript avec title, description, keywords, openGraph
- Balises `h1` uniques par page (le titre de l'outil)
- Balises `h2` et `h3` dans la section SEO en bas de page
- URL lisibles : `/texte/compteur-mots` pas `/tool?id=1`
- `lang="fr"` sur le `<html>`
- Schema.org `WebApplication` en JSON-LD sur chaque page outil

### Publicité
- **Ne jamais** charger AdSense en développement (`process.env.NODE_ENV !== 'production'`)
- Placements pub : 1 leaderboard (728x90) en haut, 1 rectangle (300x250) en sidebar desktop, 1 in-content entre le résultat et la section SEO
- Sur mobile : pub responsive entre le résultat et la section SEO uniquement
- Respecter les politiques AdSense : ne pas placer de pub dans les formulaires ou près des boutons de téléchargement

### Accessibilité
- Tous les inputs ont un `aria-label` ou `<label>` associé
- Les zones de résultat utilisent `aria-live="polite"` pour les mises à jour dynamiques
- Contraste WCAG AA minimum

### UX
- Résultat visible **sans scroll** après utilisation de l'outil
- Bouton "Effacer" toujours présent
- Bouton "Copier" sur tout résultat textuel
- Bouton "Télécharger" sur tout résultat fichier (PDF, image)
- Message de chargement pour les outils IA (l'appel API prend 1-3 secondes)
- Limite de 3 utilisations/jour pour les outils IA gratuits, avec message d'upgrade vers Scryboo AI

---

## Ordre de développement recommandé

**Semaine 1 — MVP (5 outils)**
1. Compteur de mots (le plus rapide, très cherché)
2. Compresseur d'image (fort volume de recherche)
3. Fusionner PDF (fort volume de recherche)
4. Calculateur TVA (spécifique Afrique — faible concurrence)
5. Générateur de mot de passe (fort volume, audience dev)

**Semaine 2 — Contenu SEO & Pub**
6. Intégrer AdSense sur les 5 outils existants
7. Rédiger les sections SEO de 150-200 mots pour chaque outil
8. Générer le sitemap et soumettre à Google Search Console
9. Créer les pages catégories

**Semaine 3 — 5 outils supplémentaires**
10. Convertisseur de devises (FCFA/EUR/USD)
11. Simulateur de prêt
12. Résumeur de texte IA
13. Formateur JSON
14. Convertisseur de casse

**Semaine 4 — Optimisation & distribution**
15. Tester Lighthouse (score > 90 sur tous les outils)
16. Partager sur Facebook Groups camerounais / WhatsApp communautés dev
17. Créer 2-3 posts TikTok/YouTube Short démontrant les outils
