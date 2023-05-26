const l=JSON.parse('{"key":"v-1516f34d","path":"/MyBatis%E7%AC%94%E8%AE%B0.html","title":"MyBatis 笔记","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"1 MyBatis 简介","slug":"_1-mybatis-简介","link":"#_1-mybatis-简介","children":[{"level":3,"title":"1.1 MyBatis 特性","slug":"_1-1-mybatis-特性","link":"#_1-1-mybatis-特性","children":[]},{"level":3,"title":"1.2 与其他持久层技术对比","slug":"_1-2-与其他持久层技术对比","link":"#_1-2-与其他持久层技术对比","children":[]}]},{"level":2,"title":"2 搭建 MyBatis","slug":"_2-搭建-mybatis","link":"#_2-搭建-mybatis","children":[{"level":3,"title":"2.1 配置 Maven 依赖","slug":"_2-1-配置-maven-依赖","link":"#_2-1-配置-maven-依赖","children":[]},{"level":3,"title":"2.2 创建 MyBatis 核心配置文件","slug":"_2-2-创建-mybatis-核心配置文件","link":"#_2-2-创建-mybatis-核心配置文件","children":[]},{"level":3,"title":"2.3 创建 mapper 接口","slug":"_2-3-创建-mapper-接口","link":"#_2-3-创建-mapper-接口","children":[]},{"level":3,"title":"2.4 配置 mapper 映射","slug":"_2-4-配置-mapper-映射","link":"#_2-4-配置-mapper-映射","children":[]},{"level":3,"title":"2.5 获取 sql 会话对象 测试功能","slug":"_2-5-获取-sql-会话对象-测试功能","link":"#_2-5-获取-sql-会话对象-测试功能","children":[]}]},{"level":2,"title":"3 完善 MyBatis","slug":"_3-完善-mybatis","link":"#_3-完善-mybatis","children":[{"level":3,"title":"3.1 添加查询功能","slug":"_3-1-添加查询功能","link":"#_3-1-添加查询功能","children":[]}]},{"level":2,"title":"4 MyBatis 核心配置文件（mybatis-config.xml）","slug":"_4-mybatis-核心配置文件-mybatis-config-xml","link":"#_4-mybatis-核心配置文件-mybatis-config-xml","children":[{"level":3,"title":"4.1 核心配置文件之 environment","slug":"_4-1-核心配置文件之-environment","link":"#_4-1-核心配置文件之-environment","children":[]},{"level":3,"title":"4.2 核心配置文件之 properties","slug":"_4-2-核心配置文件之-properties","link":"#_4-2-核心配置文件之-properties","children":[]},{"level":3,"title":"4.3 核心配置文件之 typeAliases","slug":"_4-3-核心配置文件之-typealiases","link":"#_4-3-核心配置文件之-typealiases","children":[]},{"level":3,"title":"4.4 核心配置文件之 mappers","slug":"_4-4-核心配置文件之-mappers","link":"#_4-4-核心配置文件之-mappers","children":[]}]},{"level":2,"title":"5 MyBatis 获取参数值的两种方式","slug":"_5-mybatis-获取参数值的两种方式","link":"#_5-mybatis-获取参数值的两种方式","children":[{"level":3,"title":"5.1 获取单个参数情况","slug":"_5-1-获取单个参数情况","link":"#_5-1-获取单个参数情况","children":[]},{"level":3,"title":"5.2 获取多个参数情况","slug":"_5-2-获取多个参数情况","link":"#_5-2-获取多个参数情况","children":[]}]},{"level":2,"title":"6 MyBatis 查询","slug":"_6-mybatis-查询","link":"#_6-mybatis-查询","children":[{"level":3,"title":"6.1 查询返回多条数据 @MapKey()","slug":"_6-1-查询返回多条数据-mapkey","link":"#_6-1-查询返回多条数据-mapkey","children":[]},{"level":3,"title":"6.2 查询返回多条数据 List<map>","slug":"_6-2-查询返回多条数据-list-map","link":"#_6-2-查询返回多条数据-list-map","children":[]}]},{"level":2,"title":"7 Mybatis 特殊功能","slug":"_7-mybatis-特殊功能","link":"#_7-mybatis-特殊功能","children":[{"level":3,"title":"7.1 模糊查询","slug":"_7-1-模糊查询","link":"#_7-1-模糊查询","children":[]},{"level":3,"title":"7.2 批量删除","slug":"_7-2-批量删除","link":"#_7-2-批量删除","children":[]},{"level":3,"title":"7.3 动态设置表名","slug":"_7-3-动态设置表名","link":"#_7-3-动态设置表名","children":[]},{"level":3,"title":"7.4 获取自增的主键","slug":"_7-4-获取自增的主键","link":"#_7-4-获取自增的主键","children":[]}]},{"level":2,"title":"8 搭建 MyBatis 框架","slug":"_8-搭建-mybatis-框架","link":"#_8-搭建-mybatis-框架","children":[{"level":3,"title":"8.1 处理字段名和属性名不一致的情况","slug":"_8-1-处理字段名和属性名不一致的情况","link":"#_8-1-处理字段名和属性名不一致的情况","children":[]},{"level":3,"title":"8.2 多对一映射处理","slug":"_8-2-多对一映射处理","link":"#_8-2-多对一映射处理","children":[]},{"level":3,"title":"8.3 延迟加载","slug":"_8-3-延迟加载","link":"#_8-3-延迟加载","children":[]},{"level":3,"title":"8.4 一对多映射","slug":"_8-4-一对多映射","link":"#_8-4-一对多映射","children":[]}]},{"level":2,"title":"9 动态 SQL","slug":"_9-动态-sql","link":"#_9-动态-sql","children":[{"level":3,"title":"9.1 if","slug":"_9-1-if","link":"#_9-1-if","children":[]},{"level":3,"title":"9.2 where","slug":"_9-2-where","link":"#_9-2-where","children":[]},{"level":3,"title":"9.3 trim","slug":"_9-3-trim","link":"#_9-3-trim","children":[]},{"level":3,"title":"9.4 choose、when、otherwise","slug":"_9-4-choose、when、otherwise","link":"#_9-4-choose、when、otherwise","children":[]},{"level":3,"title":"9.5 foreach","slug":"_9-5-foreach","link":"#_9-5-foreach","children":[]},{"level":3,"title":"9.6 sql","slug":"_9-6-sql","link":"#_9-6-sql","children":[]}]},{"level":2,"title":"10 MyBatis 缓存","slug":"_10-mybatis-缓存","link":"#_10-mybatis-缓存","children":[{"level":3,"title":"10.1 一级缓存","slug":"_10-1-一级缓存","link":"#_10-1-一级缓存","children":[]},{"level":3,"title":"10.2 二级缓存","slug":"_10-2-二级缓存","link":"#_10-2-二级缓存","children":[]},{"level":3,"title":"10.3 二级缓存相关配置文件","slug":"_10-3-二级缓存相关配置文件","link":"#_10-3-二级缓存相关配置文件","children":[]},{"level":3,"title":"10.4 MyBatis 缓存查询顺序","slug":"_10-4-mybatis-缓存查询顺序","link":"#_10-4-mybatis-缓存查询顺序","children":[]},{"level":3,"title":"10.5 整合第三方缓存 EHcache","slug":"_10-5-整合第三方缓存-ehcache","link":"#_10-5-整合第三方缓存-ehcache","children":[]}]},{"level":2,"title":"11 MyBatis 逆向工程","slug":"_11-mybatis-逆向工程","link":"#_11-mybatis-逆向工程","children":[{"level":3,"title":"11.1 简洁版","slug":"_11-1-简洁版","link":"#_11-1-简洁版","children":[]},{"level":3,"title":"11.2 奢华版","slug":"_11-2-奢华版","link":"#_11-2-奢华版","children":[]}]},{"level":2,"title":"12 分页功能","slug":"_12-分页功能","link":"#_12-分页功能","children":[]}],"git":{"updatedTime":1682390184000,"contributors":[{"name":"zcc2keai","email":"zcc2keai@163.com","commits":1}]},"filePathRelative":"MyBatis笔记.md"}');export{l as data};
