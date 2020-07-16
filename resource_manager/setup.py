from setuptools import setup

with open("README.md", 'r') as f:
    long_description = f.read()

setup(
   name='resource_manager',
   version='1.0',
   description='Flask API for calvang.github.io',
   license="GPL3",
   long_description=long_description,
   author='Calvin Huang',
   author_email='calvin.huang5@gmail.com',
   url="https://calvang.github.io",
   packages=['resource_manager'],  #same as name
   install_requires=['flask'], #external packages as dependencies
)
