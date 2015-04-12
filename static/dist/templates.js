angular.module('templates.app', ['article-page/article-page.tpl.html', 'landing-page/landing.tpl.html', 'profile-page/profile.tpl.html']);

angular.module("article-page/article-page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("article-page/article-page.tpl.html",
    "<div class=\"article-page\">\n" +
    "   <div class=\"header\">\n" +
    "      <div class=\"articles-section\">\n" +
    "         <div class=\"article\" ng-show=\"ArticleService.data.article\">\n" +
    "            <div class=\"metrics\">\n" +
    "               <a href=\"/article/{{ ArticleService.data.article.pmid }}\"\n" +
    "                  tooltip-placement=\"left\"\n" +
    "                  tooltip=\"Citation percentile. Click to see comparison set.\"\n" +
    "                  class=\"percentile scale-{{ colorClass(ArticleService.data.article.percentile) }}\">\n" +
    "                  <span class=\"val\" ng-show=\"article.percentile !== null\">\n" +
    "                     {{ ArticleService.data.article.percentile }}\n" +
    "                  </span>\n" +
    "               </a>\n" +
    "               <span class=\"scopus scopus-small\"\n" +
    "                     tooltip-placement=\"left\"\n" +
    "                     tooltip=\"{{ article.citations }} citations via Scopus\">\n" +
    "                  {{ ArticleService.data.article.citations }}\n" +
    "               </span>\n" +
    "               <span class=\"loading\" ng-show=\"article.percentile === null\">\n" +
    "                  <i class=\"fa fa-refresh fa-spin\"></i>\n" +
    "               </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"article-biblio\">\n" +
    "               <span class=\"title\">{{ ArticleService.data.article.biblio.title }}</span>\n" +
    "               <span class=\"under-title\">\n" +
    "                  <span class=\"year\">({{ ArticleService.data.article.biblio.year }})</span>\n" +
    "                  <span class=\"authors\">{{ ArticleService.data.article.biblio.author_string }}</span>\n" +
    "                  <span class=\"journal\">{{ ArticleService.data.article.biblio.journal }}</span>\n" +
    "                  <a class=\"linkout\"\n" +
    "                     href=\"http://www.ncbi.nlm.nih.gov/pubmed/{{ ArticleService.data.article.biblio.pmid }}\">\n" +
    "                        <i class=\"fa fa-external-link\"></i>\n" +
    "                     </a>\n" +
    "               </span>\n" +
    "            </div>\n" +
    "         </div>\n" +
    "      </div>\n" +
    "   </div>\n" +
    "\n" +
    "   <div class=\"articles-infovis\">\n" +
    "\n" +
    "\n" +
    "      <ul class=\"journal-lines\">\n" +
    "         <li class=\"single-journal-line\" ng-repeat=\"journal in ArticleService.data.article.refset.journal_histograms.journals\">\n" +
    "            <span class=\"journal-name\">\n" +
    "               {{ journal.name }}\n" +
    "               <span class=\"article-count\">\n" +
    "                  ({{ journal.num_articles }})\n" +
    "               </span>\n" +
    "            </span>\n" +
    "            <div class=\"journal-articles\">\n" +
    "               <a class=\"journal-article\"\n" +
    "                   ng-repeat=\"bin in journal.scopus_bins\"\n" +
    "                   href=\"http://www.ncbi.nlm.nih.gov/pubmed/{{ article.biblio.pmid }}\"\n" +
    "                   target=\"_blank\"\n" +
    "                   tooltip=\"{{ bin.scopus_count }}: {{ bin.articles.length }} articles\">\n" +
    "                  <span style=\"height: {{ bin.articles.length / 17 * 100 }}%\"\n" +
    "                       class=\"bar\"></span>\n" +
    "               </a>\n" +
    "            </div>\n" +
    "         </li>\n" +
    "      </ul>\n" +
    "   </div>\n" +
    "</div>");
}]);

angular.module("landing-page/landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing-page/landing.tpl.html",
    "<div class=\"landing\">\n" +
    "   <h1><img src=\"static/img/impactstory-biomed.png\" alt=\"Impactstory Biomed\"/></h1>\n" +
    "\n" +
    "   <form class=\"create-profile\"\n" +
    "         novalidate=\"novalidate\"\n" +
    "         ng-submit=\"makeProfile()\">\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "         <input type=\"text\"\n" +
    "                autofocus=\"autofocus\"\n" +
    "                class=\"form-control input-lg\"\n" +
    "                ng-model=\"newProfile.name\"\n" +
    "                placeholder=\"What is your name?\"/>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "         <textarea class=\"form-control input-lg\"\n" +
    "                   ng-model=\"newProfile.pmids\"\n" +
    "                   placeholder=\"What are your PubMed IDs?\"\n" +
    "                   rows=\"5\"></textarea>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"core-journals\">\n" +
    "         <h3>What are the core journals in your field?</h3>\n" +
    "         <ul class=\"core-journals-list\">\n" +
    "            <li class=\"core-journal\"\n" +
    "                ng-form=\"coreJournalForm\"\n" +
    "                ng-repeat=\"coreJournal in newProfile.coreJournals\">\n" +
    "               <div class=\"form-group\">\n" +
    "                  <input name=\"core-journal-name\"\n" +
    "                         class=\"form-control input-lg\"\n" +
    "                         type=\"text\"\n" +
    "                         placeholder=\"Journal name\"\n" +
    "                         ng-model=\"coreJournal.name\"\n" +
    "                         typeahead=\"name for name in getJournalNames($viewValue)\"\n" +
    "                         typeahead-editable=\"false\"\n" +
    "                         required />\n" +
    "               </div>\n" +
    "            </li>\n" +
    "         </ul>\n" +
    "         <span class=\"btn btn-default btn-sm add-core-journal\" ng-click=\"addCoreJournal()\">\n" +
    "            <i class=\"fa fa-plus\"></i>\n" +
    "            Add a journal\n" +
    "         </span>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"submit-btn-container\">\n" +
    "         <button type=\"submit\" class=\"btn submit btn-lg btn-default\">\n" +
    "            Find my impact\n" +
    "         </button>\n" +
    "      </div>\n" +
    "\n" +
    "   </form>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("profile-page/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile-page/profile.tpl.html",
    "<div class=\"profile-page\">\n" +
    "   <div class=\"header\">\n" +
    "      <h2>Citation report</h2>\n" +
    "   </div>\n" +
    "\n" +
    "   <div class=\"articles-section\">\n" +
    "      <ul class=\"articles\">\n" +
    "         <li ng-repeat=\"article in ProfileService.data.profile.articles | orderBy: '-percentile'\"\n" +
    "             class=\"article clearfix\">\n" +
    "\n" +
    "            <div class=\"metrics\">\n" +
    "               <a href=\"/article/{{ article.pmid }}\"\n" +
    "                  tooltip-placement=\"left\"\n" +
    "                  tooltip=\"Citation percentile. Click to see comparison set.\"\n" +
    "                  class=\"percentile scale-{{ colorClass(article.percentile) }}\">\n" +
    "                  <span class=\"val\" ng-show=\"article.percentile !== null\">\n" +
    "                     {{ article.percentile }}\n" +
    "                  </span>\n" +
    "               </a>\n" +
    "               <span class=\"scopus scopus-small\"\n" +
    "                     tooltip-placement=\"left\"\n" +
    "                     tooltip=\"{{ article.citations }} citations via Scopus\">\n" +
    "                  {{ article.citations }}\n" +
    "               </span>\n" +
    "               <span class=\"loading\" ng-show=\"article.percentile === null\">\n" +
    "                  <i class=\"fa fa-refresh fa-spin\"></i>\n" +
    "               </span>\n" +
    "            </div>\n" +
    "            <div class=\"article-biblio\">\n" +
    "               <span class=\"title\">{{ article.biblio.title }}</span>\n" +
    "               <span class=\"under-title\">\n" +
    "                  <span class=\"year\">({{ article.biblio.year }})</span>\n" +
    "                  <span class=\"authors\">{{ article.biblio.author_string }}</span>\n" +
    "                  <span class=\"journal\">{{ article.biblio.journal }}</span>\n" +
    "                  <a class=\"linkout\"\n" +
    "                     href=\"http://www.ncbi.nlm.nih.gov/pubmed/{{ article.pmid }}\">\n" +
    "                        <i class=\"fa fa-external-link\"></i>\n" +
    "                     </a>\n" +
    "               </span>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "         </li>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </ul>\n" +
    "\n" +
    "   </div>\n" +
    "</div>");
}]);
