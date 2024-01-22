import { useState } from 'react';
import * as Style from './App.Styles';
import { api } from './infra/api';
import { toast } from 'react-toastify';

function App() {

  const [file, setFile] = useState<File>();

  const [textResumo, setTextResumo] = useState<string>('');
  const [textError, setTextError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function submit() {
    try {
      debugger
      setTextError('');
      setTextResumo('');
      setIsLoading(true);

      if (!file) return setTextError('Selecione um arquivo');

      const formData = new FormData();
      formData.append('file', file);

      const { data } = await api.post('/integracaoGPT/converterAudioParaTexto', formData);
      const { data: dataResumo } = await api.post('/integracaoGPT/resumirConversasPorTexto', {
        texto: data.text
      });

      setTextResumo(dataResumo.choices[0].message.content);
    } catch (error) {
      setTextResumo('')
      setTextError('Ocorreu um erro ao resumir o texto')
    } finally {
      setIsLoading(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  }

  async function handleCopyBoard() {
    try {
      if (!textResumo) return;
      await window.navigator.clipboard.writeText(textResumo)
      toast("Texto copiado!")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Style.Card>

      <Style.Title>Resumir áudio</Style.Title>

      <Style.FileInput
        type='file'
        accept=".mp3"
        onChange={handleFileChange}
      />

      <Style.Footer>
        {
          !isLoading && textError &&
          <Style.Error>
            {textError}
          </Style.Error>
        }
        {
          !isLoading && textResumo &&
          <Style.Success>
            {textResumo.slice(0, 36)}...
          </Style.Success>
        }
        {
          isLoading &&
          <Style.Loading>
            Resumindo...
          </Style.Loading>
        }
        <Style.FooterWrapper>
          <Style.Button onClick={submit}>Upload</Style.Button>
          <Style.ButtonCopyBoard onClick={handleCopyBoard}><Style.IconCopy /></Style.ButtonCopyBoard>
        </Style.FooterWrapper>
      </Style.Footer>
    </Style.Card>
  )
}

export default App
