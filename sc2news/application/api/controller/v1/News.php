<?php

namespace app\api\controller\v1;

use app\common\model\sc2_news as sc2;
use think\Controller;
use think\Request;

class News extends Controller
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        $data = sc2::all();

        return $data;
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        $data = new sc2;

        $data->id = $request->id;
        $data->title = $request->title;
        $data->content = $request->content;
        $data->author = $request->author;

        $data->save();

        return '['.$data->id.']添加成功';
    }

    /**
     * 显示指定的资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function read($id)
    {

    }

    /**
     * 显示编辑资源表单页.
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function edit($id)
    {

    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        $data = sc2::update(['id' => $id,'title' => $request->title,
        'content' => $request->content,'author'=>$request->author]);

        return "更新成功";
    }
    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        $data = sc2::get($id);

        $data->delete();

        return $data->id."删除成功";
    }
}
