
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      title: "10 SEO Strategies That Actually Drive Results in 2025",
      description: "Learn which SEO tactics are working now and how to implement them for maximum impact.",
      category: "SEO",
      date: "May 10, 2025",
      image: "bg-gradient-to-r from-blue-400 to-cyan-400",
    },
    {
      title: "How to Build a Content Strategy That Converts",
      description: "Discover the framework we use to create content that engages audiences and drives conversions.",
      category: "Content Marketing",
      date: "May 5, 2025",
      image: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    {
      title: "Social Media Marketing Trends to Watch",
      description: "Stay ahead of the curve with these emerging social media trends and strategies.",
      category: "Social Media",
      date: "April 28, 2025",
      image: "bg-gradient-to-r from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2 reveal">OUR BLOG</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Insights</span> & Trends
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 reveal">
            Stay updated with the latest marketing strategies, industry trends, and exclusive insights from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal">
              <div className={`h-48 ${post.image} flex items-center justify-center text-white font-bold`}>
                <span>Featured Image</span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-0">
                  Read more &rarr;
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Coming Soon: Our WordPress Blog</h3>
            <p className="text-gray-600 mb-6">
              We're integrating a powerful WordPress blog to deliver even more valuable marketing insights, 
              case studies, and industry expertise. Stay tuned!
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white">
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
