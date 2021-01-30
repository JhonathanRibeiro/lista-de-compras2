import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lista de compras';
  today: number = Date.now();

  list: any[] = [
    { description:'Doritos 300g',  amount:2 },
    { description:'Coca-Cola 2L',  amount:3 },
    { description:'Pão de queijo', amount:2 },
    { description:'Coxinha',       amount:2 },
    { description:'Pão francês',   amount:10},
    { description:'Presunto',      amount:4 },
    { description:'Queijo',        amount:2 },
  ];
  
  //metodo para adicionar um item na lista
  public addItem(item, qtde){
    //objeto com o nome e qtde do produto
    const newItem = {
      description: item,//nome 
      amount: qtde //quantidade 
    }

    if(item){
      //adiciona o objeto no array list
      this.list.push(newItem);
    } else {
      swal({
        title: "Erro",
        text: `Não é possível incluir um item sem nome na lista, \n 
        preencha o campo descrição e tente novamente!`,
        icon: "error"
      })
    }
  }
  /**
   * Metodo para excluir um item na lista com validação.
   * 
   * Informa ao usuário o item a ser excluído e aguarda a sua 
   * decisão, só irá excluir o item da lista se o usuário clicar
   * em excluir
   */
  public delete(item){
    /**
     * Para mais informações sobre a  biblioteca SweetAlert 
     * visite: https://sweetalert.js.org/
     */
    swal({
      title: "Excluir item?",
      text:  `Excluir o item ${item.description} da lista?`,
      icon:  "warning", 
      buttons: ['Cancelar', 'Excluir'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.list = this.list.filter(p => p.description !== item.description);
        swal(`O item ${item.description} foi removido com sucesso!`, {
          icon: "success",
        });
      } 
    });
  }
  /** 
   * Método para imprimir a lista de compras
   * Essa função permite imprimir todo o conteudo da tela,
   * para imprimir somente a lista foi adicionado um css
   * responsável pela estilização 
  */
  public print(){
    window.print();
  }
}
