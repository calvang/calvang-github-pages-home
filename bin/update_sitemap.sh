#!/bin/bash
# Script to update the Sitemap

source resource_manager/env/bin/activate
python3 sitemap_generator/sitemap_generator.py
echo "Site map updated."