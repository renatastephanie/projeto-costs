export const ProjectForm = () => {
  return (
    <>
      <form action="">
        <div>
          <input type="text" placeholder="Insira o nome do Projeto" />
        </div>
        <div>
          <input type="text" placeholder="Insira o orçamento total" />
        </div>
        <div>
          <select name="category_id">
            <option disabled selected>Selecione a Categoria</option>
          </select>
        </div>

        <div>
          <input type="submit" value='Criar Projeto' />
        </div>
      </form>
    </>
  );
};
