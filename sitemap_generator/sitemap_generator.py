import sys
from os import path, walk
import json
import jinja2
from jinja2 import Environment, FileSystemLoader, \
    Template, select_autoescape

def crawl_posts():
    '''Find current blog posts from public directory (replaced by parse_posts)'''
    posts = []
    post_dir = path.abspath(path.join('public', 'posts'))
    blog_url = 'https://calvang.github.io/#/Blog/'
    for r,d,f in walk(post_dir, topdown=True):
        for post in f:
            post[-3:] == '.md' and posts.append(blog_url+post[:-3])
        break
    return { 'BLOGPOSTS': posts }

def parse_posts():
    '''Find current blog posts from blog.json'''
    blog_url = 'https://calvang.github.io/#/Blog/'
    with open(path.abspath(path.join('src', 'resources', 'data', 'blog.json')), 'r') as file:
        post_data = json.loads(file.read())
    posts = [blog_url+post['file'][:-3] for post in post_data['posts']]
    return { 'BLOGPOSTS': posts }

def main():
    env = Environment(
        loader=FileSystemLoader(path.abspath('sitemap_generator/')),
        autoescape=select_autoescape(['html', 'xml'])
    )
    template = env.get_template('sitemap_template.xml')
    data = parse_posts()
    # TODO change so this ouputs in public
    with open(path.abspath(path.join('public', 'sitemap.xml')), 'w') as output:
        output.write(template.render(**data))

if __name__ == '__main__':
    main()