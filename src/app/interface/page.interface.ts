export interface IPage {
    _id: string
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: number
    advantages: Advantage[]
    createdAt: string
    updatedAt: string
    __v: number
    hh: Hh
    qas: []
    addresses: []
    categoryOn: string
    blog: Blog
    sravnikus: Sravnikus
    learningclub: Learningclub
  }
  
  export interface Advantage {
    title: string
    description: string
    _id: string
  }
  
  export interface Hh {
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: string
    _id: string
  }
  
  export interface Blog {
    h1: string
    metaTitle: string
    metaDescription: string
    views: number
    _id: string
  }
  
  export interface Sravnikus {
    metaTitle: string
    metaDescription: string
    qas: []
    _id: string
  }
  
  export interface Learningclub {
    metaTitle: string
    metaDescription: string
    qas: []
    _id: string
  }


  
export interface IProduct {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  link: string
  image: string
  characteristics: Characteristic[]
  initialRating: number
  description: string
  credit: number
  price: number
  oldPrice: number
  createdAt: string
  updatedAt: string
  __v: number
  blog: Blog
  html: string
  companyId: string
  clicks: number
  reviews: []
  reviewCount: number
  reviewAvg?: [] 
}

export interface Characteristic {
  name: string
  value: string
}

export interface Blog {
  text: string
  _id: string
}