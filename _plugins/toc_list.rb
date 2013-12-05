module Jekyll
  module TableOfContentsFilter
    def toc_list(document)
      toc = [ "<ol>" ]
      content = Kramdown::Document.new(document)
      toc_tree = Kramdown::Converter::Toc.convert(content.root, toc_levels: '2').first
      toc_tree.children.each do |heading|
        html_id = heading.attr[:id]
        text = heading.value.options[:raw_text]
        toc << %Q{<li><a href="##{html_id}">#{text}</a></li>}
      end
      toc << "</ol>"
      toc.join("\n")
    end
  end
end

Liquid::Template.register_filter(Jekyll::TableOfContentsFilter)
